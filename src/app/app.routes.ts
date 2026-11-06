import { STOREFRONT_CONFIG } from './core/storefront.config';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ProductDetailComponent } from './pages/product-detail.component';
import { CartComponent } from './pages/cart.component';
import { ReviewComponent } from './pages/review.component';
import { NotFoundComponent } from './pages/not-found.component';
import { ShopComponent } from './pages/shop.component';
import { CheckoutComponent } from './pages/checkout.component';
import { ContactComponent } from './pages/contact.component';
import { CheckoutResultComponent } from './pages/checkout-result.component';
import { PoliciesComponent } from './pages/policies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `${STOREFRONT_CONFIG.businessName} | ${STOREFRONT_CONFIG.tagline}` },
  { path: 'shop', component: ShopComponent, title: `Shop products | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'product/:slug', component: ProductDetailComponent, title: `Product | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'cart', component: CartComponent, title: `Your cart | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'checkout/result', component: CheckoutResultComponent, title: `Payment status | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'checkout', component: CheckoutComponent, title: `Checkout | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'contact', component: ContactComponent, title: `Contact | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'policies', component: PoliciesComponent, title: `Customer policies | ${STOREFRONT_CONFIG.businessName}` },
  { path: 'review/:slug', component: ReviewComponent, title: `Write a review | ${STOREFRONT_CONFIG.businessName}` },
  { path: '**', component: NotFoundComponent, title: `Page not found | ${STOREFRONT_CONFIG.businessName}` },
];
