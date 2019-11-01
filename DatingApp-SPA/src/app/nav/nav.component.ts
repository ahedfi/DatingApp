import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    debugger;
    this.authService.login(this.model).subscribe(
      result => {
        console.log("Loggged in Successfully");
      },
      error => {
        console.log("Failed to login");
      }
    );
  }
  isLoggedIn() {
    var token = localStorage.getItem("token");
    return !!token;
  }
  logout() {
    localStorage.removeItem("token");
  }
}
