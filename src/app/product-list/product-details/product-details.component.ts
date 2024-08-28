import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../iProduct';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { products } from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
 
  products!: iProduct[];
  product!: iProduct;


  constructor(private route:ActivatedRoute,
    private cartService:CartService){}

onAddToCart() {
    this.cartService.addToCart(this.product);
    console.log(this.product);
    
}

ngOnInit() {
  this.products = products;
  const index: number= +this.route.snapshot.params['id'];
  this.product = this.products[index];

  console.log(index);
  
  
  
  
}

 


}


