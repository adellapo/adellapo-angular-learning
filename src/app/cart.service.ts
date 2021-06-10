import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {

  items: Product[] = [];

  constructor() { }

  addToCart(p: Product){
    this.items.push(p);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
  
}