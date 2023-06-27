import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  auth: boolean = false
  user: User
  userString: string | null = localStorage.getItem('user')

  login(email: string, password: string) {
    if (this.userString) {
      this.user = JSON.parse(this.userString)
      if (this.user.email === email && this.user.password === password) {
        this.auth = true
      }
    }
    localStorage.setItem('auth', 'true')
  }

  logout(){
    this.auth = false
    localStorage.setItem('auth', 'false')
  }
}
