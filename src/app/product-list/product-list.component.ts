import { Component, OnInit } from '@angular/core';
import { iProduct } from '../iProduct';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  productItems!: iProduct[];
  products!: iProduct;
  outOfStock: any;
 
  constructor(private cartService: CartService) {}

     directAddToCart(index: number){
      const product = products[index];
        this.cartService.addToCart(product);
         console.log(product);
     }
    
  ngOnInit(): void {
    this.productItems = products;
  }

 

}
