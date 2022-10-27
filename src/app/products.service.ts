import { Subject } from 'rxjs';

export class ProductsService {
  deleteProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
    this.productsUpdated.next(null);
  }
  private products = ['A Book'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(null);
  }

  getProducts() {
    return [...this.products];
  }
}
