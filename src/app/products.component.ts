import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form) {
    //
    console.log('form', form);
    if (form.valid) this.products.push(form.value.productName);
  }

  onRemoveProduct(product: string) {
    this.products = this.products.filter((prod) => prod !== product);
  }
}
