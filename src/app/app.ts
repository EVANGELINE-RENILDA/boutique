import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,RouterModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-botique';
  constructor(public router:Router){

  }
 

} 
