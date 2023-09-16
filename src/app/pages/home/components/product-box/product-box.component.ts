import {Component, Input} from '@angular/core';
import {Product} from "../../../../model/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() product: Product | undefined;
  @Input() fullWidthMode = false;

  onAddToCart() {
    console.log('Add to cart')
  }
}
