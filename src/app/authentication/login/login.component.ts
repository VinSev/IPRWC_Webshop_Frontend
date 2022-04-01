import {Component, OnDestroy} from '@angular/core';
import { AuthService } from "../auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NotificationService} from "../../notification/notification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private subscription!: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  public login(email: string, password: string): void {
    this.subscription = this.authService.login(email, password)
      .subscribe({
        next: response => {
          this.authService.user = response.user;
          localStorage.setItem("token", response.token);
          this.router.navigate(["/products"]);
          this.notificationService.toastrSuccess("Login successful");
        },
        error: () => {
          this.notificationService.toastrError("Something went wrong, please try again");
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
