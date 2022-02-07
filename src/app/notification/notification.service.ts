import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private tapToDismiss: boolean = true;
  private positionClass: string = "toast-bottom-right";

  constructor(private toastr: ToastrService) { }

  public toastrSuccess(message: string) {
    this.toastr.success(message, "", {
      tapToDismiss: this.tapToDismiss,
      positionClass: this.positionClass,
      timeOut: 1500
    });
  }

  public toastrError(message: string) {
    this.toastr.error(message, "", {
      tapToDismiss: this.tapToDismiss,
      positionClass: this.positionClass,
      timeOut: 3000
    });
  }

  public toastrWarning(message: string) {
    this.toastr.warning(message, "", {
      tapToDismiss: this.tapToDismiss,
      positionClass: this.positionClass,
      timeOut: 2000
    });
  }

  public toastrInfo(message: string) {
    this.toastr.info(message, "", {
      tapToDismiss: this.tapToDismiss,
      positionClass: this.positionClass,
      timeOut: 1500
    });
  }
}
