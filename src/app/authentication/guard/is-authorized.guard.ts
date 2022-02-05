import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from "../auth.service";
import {NotificationService} from "../../notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class IsAuthorizedGuard implements CanActivate {

  constructor(private authService: AuthService,
              private notificationService: NotificationService) {
  }

  public canActivate(): boolean {
    if(this.authService.hasAuthority("Admin")) {
      return true;
    }
    this.notificationService.toastrError("User doesn't have authority");
    return false;
  }
}
