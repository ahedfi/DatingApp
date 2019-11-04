import { Injectable } from "@angular/core";
declare let alertify: any;

@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}

  confirm(message: string, callback: () => any) {
    alertify.confirm(message, function(e) {
      if (e) callback();
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  fail(message: string) {
    alertify.error(message);
  }
  
  info(message: string) {
    alertify.log(message);
  }
}
