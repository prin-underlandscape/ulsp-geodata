import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hero-banner',
  template: `
    <div class="hero-banner hero-banner--aqua-emerald">
      <div class="hero-banner__logo">
        <img class="hero-banner__image" [src]="logo" alt="Angular logo" />
      </div>
      <h1 class="hero-banner__headline">Hello, Angular World!</h1>
      <p class="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for Angular apps using <strong>Auth0</strong>.
      </p>
    </div>
  `,
})
export class HeroBannerComponent {
  logo = 'https://cdn.auth0.com/blog/developer-hub/angular-logo.svg';
}
