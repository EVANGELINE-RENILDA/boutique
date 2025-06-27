import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart implements OnInit {
  cartItems: any[] = [];
  quantities: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const item = localStorage.getItem('cartItems');
    console.log('📦 CartItems from storage:', item);

    this.cartItems = item ? JSON.parse(item) : [];

    // Initialize quantities
    this.quantities = this.cartItems.map(item => item.quantity || 1);

    if (this.cartItems.length === 0) {
      console.log('❌ Cart is empty');
    } else {
      console.log('✅ Loaded cart items:', this.cartItems);
    }
  }

  increment(index: number) {
    this.quantities[index]++;
    this.cartItems[index].quantity = this.quantities[index];
    this.updateStorage();
  }

  decrement(index: number) {
    if (this.quantities[index] > 1) {
      this.quantities[index]--;
      this.cartItems[index].quantity = this.quantities[index];
      this.updateStorage();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.quantities.splice(index, 1);
    this.updateStorage();
  }

  updateStorage() {
    if (this.cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    } else {
      localStorage.removeItem('cartItems');
    }
  }

  get total(): number {
    return this.cartItems.reduce((sum, item, i) => sum + item.price * this.quantities[i], 0);
  }

  backToShop() {
    this.router.navigateByUrl('/products');
  }

  orderNow() {
    const orderDetails = this.cartItems.map((item, i) => ({
      ...item,
      quantity: this.quantities[i]
    }));
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    this.router.navigateByUrl('/order-now');
  }
}
