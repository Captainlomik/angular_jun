import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  auth: boolean 
  errorMessage: Error


  constructor(private authService: AuthService, private router: Router, private alert: AlertService) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  login() {
    try {
      this.auth = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      this.loginForm.enable
      this.router.navigate(['posts'])
    }
    catch (e: any) {
      this.errorMessage = e.message
    }
  }
}