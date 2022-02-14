import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.model";
import {environment} from "../../environments/environment";
import {NotificationService} from "../notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: User = User._emptyUser;

  constructor(private http: HttpClient,
              private notificationService: NotificationService) { }

  public get user(): User {
    return this._user;
  }

  public set user(user: User) {
    this._user = user;
  }

  public login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.baseURL}/auth/login`, { email, password });
  }

  public register(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.baseURL}/users/register`, { email, password })
  }

  public logout(): void {
    this.notificationService.toastrSuccess("Logout successful");
    localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  public hasAuthority(_role: string): boolean {
    for (let role of this._user.roles) {
      if(role.toUpperCase() == _role.toUpperCase()) {
        return true;
      }
    }
    return false;
  }
}

type AuthResponse = {
  user: User,
  token: string
}


