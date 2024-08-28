import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 
  get cartCount(): number {
    return this.cartService.getCount();
  }

  constructor(private cartService: CartService){}

  ngOnInit(): void {
  
  }

  

}
