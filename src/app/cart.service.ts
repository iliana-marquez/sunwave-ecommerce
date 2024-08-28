import { Injectable } from '@angular/core';
import { iProduct } from './iProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: iProduct[]=[]

    constructor() { }

  addToCart(product:iProduct) {
      if(this.cartItems.includes(product)){
        product.qtty++;
        alert(`${product.name} added to cart`)
      }else{
        this.cartItems.push(product);
        alert(`${product.name} added to cart`)
      }
  }

  onQttyIncrease(product:iProduct){
    product.qtty ++
  }

  onQttyDecrease(product:iProduct){
    if (product.qtty == 1) {
      let index :number = this.cartItems.indexOf(product);
      this.cartItems.splice(index, 1);
    }else product.qtty--;
  }

  delete(index:number){
    this.cartItems[index].qtty = 1;
    this.cartItems.splice(index, 1);
  }

  getCart(){
    return this.cartItems
  }

  getCount() {
    return this.cartItems.reduce((acc, item) => acc + item.qtty, 0);
  }

  getSubtotal(){
      let subtotal = 0
      this.cartItems.forEach((obj:iProduct) => {
        subtotal += obj.price * obj.qtty
    })
    return subtotal
  }

  getServiceFee(){
    let subtotal = this.getSubtotal();
    let serviceFee = subtotal * 0.10; 
    return serviceFee;
  }

  getTotal(){
    let subtotal = this.getSubtotal();
    let serviceFee = this.getServiceFee(); 
    let total = (subtotal+serviceFee);
    return total;
  }

  getTotalWithDisc(): number | undefined {
    let total = this.getTotal();
    if (total > 40){
      let totalWithDisc: number = total * 0.85; 
      return totalWithDisc;
    } 
    return undefined;
  }
    
}




  





