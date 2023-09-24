import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() product: Product | undefined;
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    console.log('Add to cart')
    this.addToCart.emit(this.product);
  }
}
