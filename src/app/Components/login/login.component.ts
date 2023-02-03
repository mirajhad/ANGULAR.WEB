import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;

  constructor() {
    console.log("Login Component");
   }

   ngOnInit() {
    console.log("Login Component");
   }

  onSubmit() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }

}
