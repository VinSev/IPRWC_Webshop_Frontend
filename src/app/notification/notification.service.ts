import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  public toastrSuccess(message: string) {
    this.toastr.success(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-center"
    });
  }

  public toastrError(message: string) {
    this.toastr.error(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-center"
    });
  }

  public toastrWarning(message: string) {
    this.toastr.warning(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-center"
    });
  }

  public toastrInfo(message: string) {
    this.toastr.info(message, "", {
      tapToDismiss: true,
      positionClass: "toast-bottom-center"
    });
  }
}
