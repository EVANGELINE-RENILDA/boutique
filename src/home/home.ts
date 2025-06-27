import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
@ViewChild('track') track!: ElementRef<HTMLDivElement>;
 constructor(private router: Router) {}
  currentIndex = 0;

  nextSlide() {
    const totalSlides = this.track.nativeElement.children.length;
    this.currentIndex = (this.currentIndex + 1) % totalSlides;
    this.updateCarousel(); 
  }

  prevSlide() {
    const totalSlides = this.track.nativeElement.children.length;
    this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const slideWidth = this.track.nativeElement.children[0].clientWidth;
    this.track.nativeElement.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
  }
  pro(){
    console.log('navigate ');
    this.router.navigateByUrl('/products')
    
  }
}
