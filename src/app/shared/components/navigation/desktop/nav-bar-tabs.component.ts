import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';
import { NavBarTabComponent } from './nav-bar-tab.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavBarTabComponent],
  selector: 'app-nav-bar-tabs',
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {
  user$ = this.authService.user$;
  isAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {};
  
  canDownload(roles: string[]) {
    return roles.includes('contributor') || roles.includes('user') || roles.includes('admin');
  }

  canUpload(roles: string[]) {
    return roles.includes('contributor') || roles.includes('admin');
  }
  
  hasProfile(roles: string[]) {
    return roles.includes('contributor') || roles.includes('user') || roles.includes('admin');
  }
  
  canAdmin(roles: string[]) {
    return roles.includes('admin');
  }
}
