import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      result => {
        this.alertify.success("Loggged in Successfully");
      },
      error => {
        this.alertify.fail(error);
      }
    );
  }
  isLoggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem("token");
    this.alertify.info("logged out");
  }
}
