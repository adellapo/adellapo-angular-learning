import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items: Product[] = [];

  constructor(private myHttpClient: HttpClient) {}

  getShippingPrices(){
    return this.myHttpClient.get<{type:string, price: number}[]>('/assets/shipping.json');
  }
  addToCart(p: Product) {
    this.items.push(p);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
