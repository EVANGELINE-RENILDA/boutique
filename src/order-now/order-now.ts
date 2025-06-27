import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-now.html',
  styleUrls: ['./order-now.scss']
})
export class OrderNowComponent implements OnInit {
  orderItems: any[] = [];
  total: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('orderDetails');
    if (data) {
      const parsed = JSON.parse(data);
      this.orderItems = parsed.map((item: any, index: number) => ({
        ...item,
        quantity: item.quantity ?? 1
      }));
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

 confirmOrder() {
  const selectedProduct = this.orderItems[0]; // Assuming only 1 item
  localStorage.removeItem('orderDetails');
  this.router.navigate(['/payment'], {
    state: { product: selectedProduct }
  });
}


  backToCart() {
    this.router.navigateByUrl('/cart');
  }
}
