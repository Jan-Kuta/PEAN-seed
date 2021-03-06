import { Router } from '@angular/router';
import { AlertService } from './../../alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  redirect: boolean = false;

  constructor(private router: Router, private authService: AuthService, private alertService: AlertService) {}

  ngOnInit() {
  }

  // sign in by email and password
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/']);          
        },
        (error) => {
          console.log(error);
          this.alertService.error('Bad credentials');
        }
      );
  }

  // login by facebook account
  onFacebookLogin(){
    this.authService.loginFacebook();
  }

  // login by twitter account
  onTwitterLogin(){
    this.authService.loginTwitter();
  }

  // login by google account
  onGoogleLogin(){
    this.authService.loginGoogle();
  }

}
