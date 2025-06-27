import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../home/home').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('../product/product').then(m => m.ProductComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('../about-us/about-us').then(m => m.AboutUsComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('../contact-us/contact-us').then(m => m.ContactUsComponent)
  },
  {
    path: 'cart', 
    loadComponent: () => import('../cart/cart').then(m => m.Cart)
  },
  {
    path: 'order-now', 
    loadComponent: () => import('../order-now/order-now').then(m => m.OrderNowComponent)
  },
 
  {
    path: 'admin', 
    loadComponent: () => import('../admin/admin').then(m => m.Admin)
  },
  {
    path: 'payment', 
    loadComponent: () => import('../payment/payment').then(m => m.Payment)
  },
 
  
 
 

];
