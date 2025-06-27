import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss']
})
export class Payment implements OnInit {
  cartItems: any[] = [];
  paymentMethod: string = '';
  showModal: boolean = false;
  selectedGateway: string = '';

  // Modal inputs
  deliveryAddress: string = '';
  upiId: string = '';
  bankName: string = '';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const state = this.location.getState() as { product?: any };
    if (state.product) {
      this.cartItems = [state.product];
    }
  }

  getGrandTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

onPaymentChange() {
  if (this.paymentMethod === 'cod') {
    this.selectedGateway = 'cod';
    this.showModal = true;
  } else if (this.paymentMethod === 'upi') {
    this.selectedGateway = 'upi';
    this.showModal = true;
  } else if (this.paymentMethod === 'netbanking') {
    this.selectedGateway = 'netbanking';
    this.showModal = true;
  }
}



  closeModal() {
    this.showModal = false;
    this.paymentMethod = '';
    this.selectedGateway = '';
    this.upiId = '';
    this.bankName = '';
    this.deliveryAddress = '';
  }

  confirmModal() {
    if (this.selectedGateway === 'upi' && !this.upiId.trim()) {
      alert('Please enter your UPI ID.');
      return;
    }

    if (this.selectedGateway === 'netbanking' && !this.bankName.trim()) {
      alert('Please enter your bank name.');
      return;
    }

    if (this.selectedGateway === 'cod' && !this.deliveryAddress.trim()) {
      alert('Please enter your delivery address.');
      return;
    }

    this.showModal = false;
  }

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('Cart is empty!');
      return;
    }

    // Validate before placing order
    if (this.paymentMethod === 'cod' && !this.deliveryAddress.trim()) {
      alert('Please confirm your address for COD.');
      return;
    }
    if (this.paymentMethod === 'upi' && !this.upiId.trim()) {
      alert('Please confirm your UPI ID.');
      return;
    }
    if (this.paymentMethod === 'netbanking' && !this.bankName.trim()) {
      alert('Please confirm your bank name.');
      return;
    }

    alert(`Order Placed Successfully!\nPayment Mode: ${this.paymentMethod}`);
    localStorage.removeItem('cart');
    this.router.navigate(['/products']);
  }
}
