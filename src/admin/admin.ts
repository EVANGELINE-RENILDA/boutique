import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class Admin implements OnInit {
  productName: string = '';
  productPrice: number = 0;
  productImage: string = '';
  message: string = '';
  productList: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const stored = localStorage.getItem('productList');
    this.productList = stored ? JSON.parse(stored) : [];
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.productImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    if (!this.productName || !this.productPrice || !this.productImage) {
      this.message = '⚠️ Please fill all fields and upload an image';
      return;
    }

    const newProduct = {
      name: this.productName,
      price: this.productPrice,
      image: this.productImage
    };

    this.productList.push(newProduct);
    localStorage.setItem('productList', JSON.stringify(this.productList));

    this.message = '✅ Product added successfully!';

    // Clear inputs
    this.productName = '';
    this.productPrice = 0;
    this.productImage = '';

    // Optional redirect after 1.5s
    setTimeout(() => {
      this.message = '';
      this.router.navigateByUrl('/products');
    }, 1500);
  }

 deleteProduct(index: number) {
  this.productList.splice(index, 1);
  localStorage.setItem('productList', JSON.stringify(this.productList));
}
}
  