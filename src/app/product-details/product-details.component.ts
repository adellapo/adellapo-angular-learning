import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // el producto seleccionado
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartServ: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // busco en el array de productos
    this.product = products.find(p => p.id === productIdFromRoute);
  }

  addToCart(selectedProduct: Product) {
    this.cartServ.addToCart(selectedProduct);
    window.alert('Product added to cart.');
  }
}
