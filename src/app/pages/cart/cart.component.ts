import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../model/cart.model";
import {Subscription} from "rxjs";
import {CartService} from "../../service/cart/cart.service";




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'actions',
    'total'
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((cart: CartItem[]) => {
      this.dataSource = cart;
    }
    );
  }

  onDelete(element: CartItem) {
    console.log('Delete', element);
    this.cartService.removeFromCart(element);
  }

  onClear() {
    console.log('Clear')
    this.cartService.clearCart();
  }

  onRemoveQuantity(element: CartItem) {
    console.log('Remove quantity', element);
    this.cartService.removeQuantity(element);
  }

  onAddQuantity(element: CartItem ) {
    console.log('Add quantity', element);
    this.cartService.addToCart(element);
  }
  getItemTotal(): number {
    return this.cartService.getItemTotal();
  }
}
