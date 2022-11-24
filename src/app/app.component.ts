import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  username : string="";
  pass : string="";
  output : string="";
  colordecider:boolean = false;

  erase() {
    this.output = "";
  }

  submit() {
    this.output = "";
    if(this.username == "madhan" && this.pass == "hii") {
      this.output = "valid user";
      this.colordecider = true;
    }
    else {
      this.output = "Not a valid user please check your username/password.";
      this.colordecider = false;
    }
    console.log(this.username);
    console.log(this.pass);
  }
}
