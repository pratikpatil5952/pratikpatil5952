import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){}
  loginForm={
    user:'',
    password:''
  }

  login(user,pass){
    if(user==='Admin'&&pass==='Admin@123')
      this.route.navigateByUrl('/dashboard')
    else
    this.route.navigate(['/'])
 
  }

}
