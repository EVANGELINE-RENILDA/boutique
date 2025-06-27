import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem('productList');

    if (saved) {
      this.products = JSON.parse(saved);
    } else {
      // Default products if no admin-added ones
      this.products = [
        {
          name: 'Embellished Pink Kurti',
          price: 1299,
          image: 'https://images.pexels.com/photos/22064199/pexels-photo-22064199.jpeg'
        },
        {
          name: 'Floral Maxi Dress',
          price: 1499,
          image: 'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg'
        },
        {
          name: 'Elegant Pink Dress',
          price: 1599,
          image: 'https://images.pexels.com/photos/20110512/pexels-photo-20110512.jpeg'
        }
      ];
    }
  }

  addToCart(product: any) {
    const existing = localStorage.getItem('cartItems');
    let cart = existing ? JSON.parse(existing) : [];

    cart.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cart));

    this.router.navigateByUrl('/cart');
  }
}
