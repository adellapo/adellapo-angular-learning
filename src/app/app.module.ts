import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      /* 

          creo un endpoint 'products-endpoint' al que se le va pasar un 'algo' en la variable 'productId' para ver el componente ProductDetailsComponent

          para esto usamos [routerLink] dentro de un <a> pasando un arreglo con el endpoint creado, products-endpoint, y el valor donde va a apuntar
          
          <a [routerLink]="['/products-endpoint', 'EJEMPLO_LINK']"></a> --> .../products-endpoint/EJEMPLO_LINK
          <a [routerLink]="['/products-endpoint', 1]"></a> --> .../products-endpoint/1
          <a [routerLink]="['/products-endpoint', product.id]"></a> --> .../products-endpoint/# (siendo # el id del producto)
          
        */
      { path: 'products/:productId', component: ProductDetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
