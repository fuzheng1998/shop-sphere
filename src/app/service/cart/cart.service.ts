import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartItem} from "../../model/cart.model";


const ELEMENT_DATA: Array<CartItem> = [
  {
    product: 'https://placehold.co/150',
    name: 'Product 1',
    price: 100,
    quantity: 1,
    id: 1,
  },
  {
    product: 'https://placehold.co/150',
    name: 'Product 2',
    price: 200,
    quantity: 2,
    id: 2,
  },
  {
    product: 'https://placehold.co/150',
    name: 'Product 3',
    price: 300,
    quantity: 3,
    id: 3,
  }
];

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // subject is special type of observable, which allows to push new values to subscribers
  cart = new BehaviorSubject<Array<CartItem>>(ELEMENT_DATA);

  removeFromCart(item: CartItem, updateCart = true): CartItem[] {
    const filteredItems = this.cart.value.filter((cartItem: CartItem) => {
        return cartItem.id !== item.id;
      }
    );

    if (updateCart) {
      this.cart.next(filteredItems);
      console.log('Cart updated', this.cart.value)
    }

    return filteredItems;
  }

  clearCart(): void {
    this.cart.next([]);
    console.log('Cart cleared', this.cart.value)
  }
}
