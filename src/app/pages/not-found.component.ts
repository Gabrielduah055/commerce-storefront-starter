import { STOREFRONT_CONFIG } from '../core/storefront.config';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found page-shell">
      <div>
        <p class="detail-category">Page not found</p>
        <h1 class="page-title">We could not find this page.</h1>
        <p class="text-[15px]! font-medium! leading-7! sm:text-base!">The page may have moved, but the {{ config.businessName }} collection is still ready to browse.</p>
        <a class="button button-dark" routerLink="/">Return to the shop</a>
      </div>
    </section>
  `,
})
export class NotFoundComponent {
  readonly config = STOREFRONT_CONFIG;
}
