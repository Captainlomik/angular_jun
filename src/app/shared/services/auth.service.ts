import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  auth: boolean = false
  user: User
  userString: string | null


  login(email: string, password: string) {
    this.userString = localStorage.getItem('user')

    if (!this.userString) throw new Error('Пользователь отсуствует')

    this.user = JSON.parse(this.userString)

    if (this.user.email !== email || this.user.password !== password) {
      throw new Error('Email или пароль неверные. Попробуйте еще раз.')
    }

    this.auth = true
    localStorage.setItem('auth', 'true')
    return this.auth
  }

  logout() {
    this.auth = false
    localStorage.setItem('auth', 'false')
  }

  isLogin() {
    return localStorage.getItem('auth') === 'true'
  }
}
