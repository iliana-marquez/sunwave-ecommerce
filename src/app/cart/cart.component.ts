import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { iProduct } from '../iProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems!: iProduct[];
  subtotal!: number;
  serviceFee!: number;
  total!: number;
  totaldisc!: number | undefined;
  
  constructor (private cartService:CartService) { }

  incQtty(product: iProduct){
    this.cartService.onQttyIncrease(product);
    this.subtotal = this.cartService.getSubtotal();
    this.serviceFee = this.cartService.getServiceFee();
    this.total = this.cartService.getTotal();
    this.totaldisc = this.cartService.getTotalWithDisc();
  }

  decQtty(product: iProduct){
    this.cartService.onQttyDecrease(product);
    this.subtotal = this.cartService.getSubtotal();
    this.serviceFee = this.cartService.getServiceFee();
    this.total = this.cartService.getTotal();
    this.totaldisc = this.cartService.getTotalWithDisc();
  }

  removeItem(index:number){
    this.cartService.delete(index);
    this.subtotal = this.cartService.getSubtotal();
    this.serviceFee = this.cartService.getServiceFee();
    this.total = this.cartService.getTotal();
    this.totaldisc = this.cartService.getTotalWithDisc();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.subtotal = this.cartService.getSubtotal();
    this.serviceFee = this.cartService.getServiceFee();
    this.total = this.cartService.getTotal();
    this.totaldisc = this.cartService.getTotalWithDisc();
}

}