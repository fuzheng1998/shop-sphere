import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  product: any;
  @Input() fullWidthMode = false;

  onAddToCart() {
    console.log('Add to cart')
  }
}
