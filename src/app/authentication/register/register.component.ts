import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../auth.service";
import {NotificationService} from "../../notification/notification.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  private subscription!: Subscription;

  constructor(private authService: AuthService,
              private notificationService: NotificationService) {
  }

  public register(email: string, password: string, form: NgForm): void {
    this.subscription = this.authService.register(email, password)
      .subscribe({
        next: response => {
          this.authService.user = response.user;
          this.notificationService.toastrSuccess("Registration successful");
          form.reset();
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
