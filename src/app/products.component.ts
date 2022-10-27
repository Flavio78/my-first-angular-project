import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book';
  isDisabled = true;
  products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productsUpdated.subscribe(
      () => {
        this.products = this.productService.getProducts();
      }
    );
  }

  onAddProduct(form: FormControl) {
    //
    console.log('form', form);
    if (form.valid) this.productService.addProduct(form.value.productName);
  }

  onRemoveProduct(product: string) {
    this.products = this.products.filter((prod) => prod !== product);
  }
}
