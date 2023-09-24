import {Component} from '@angular/core';
import {StoreService} from "../../service/store/store.service";
import {Subscription} from "rxjs";
import {Product} from "../../model/product.model";
import {CartService} from "../../service/cart/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols = 3;
  productsSubscription: Subscription | undefined;
  category: string | undefined;
  products: Array<Product> | undefined;
  rowHeight: number = ROWS_HEIGHT[this.cols];

  constructor(
    private storeService: StoreService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  /**
   * @description This method is applied as an attribute value of 'sortChange' in the app-products-header component.
   * @param newSort{string}- The new sort value.
   */
  onSortChange(newSort: string): void {
    this.sort = newSort;
    console.log(`sort in home compoent by ${this.sort}`);
  }

  count = '12';
  sort = 'desc';

  onItemCountChange(itemCount: number): void {
    this.count = itemCount.toString();
    console.log(`count in home compoent by ${this.count}`);
  }

  onColumnsCountChange(columnsCount: number): void {
    this.cols = columnsCount;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(`cols in home compoent by ${this.cols}`);
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

}
