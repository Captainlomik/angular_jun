import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login: string | null = localStorage.getItem('auth')

  logOut() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
