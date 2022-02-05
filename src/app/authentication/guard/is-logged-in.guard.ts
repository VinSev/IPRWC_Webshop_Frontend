import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from "../auth.service";
import {NotificationService} from "../../notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService,
              private notificationService: NotificationService) { }

  public canActivate(): boolean {
    if(this.authService.isLoggedIn()) {
      this.notificationService.toastrWarning("User already logged in");
      return false;
    }
    return true;
  }



}
