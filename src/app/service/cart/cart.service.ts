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

  removeFromCart(item: CartItem, updateCart = true) {
    const filteredItems = this.cart.value.filter(
      (_item) => _item.id !== item.id
    );

    if (updateCart) {
      this.cart.next( filteredItems );
    }

    return filteredItems;
  }

  clearCart(): void {
    this.cart.next([]);
    console.log('Cart cleared', this.cart.value)
  }

  addToCart(item: CartItem): void {
    const currentCart = this.cart.value;
    const itemExists = currentCart.find((cartItem: CartItem) => {
      return cartItem.id === item.id;
    });

    if (itemExists) {
      itemExists.quantity++;
    } else {
      currentCart.push(item);
    }

    this.cart.next(currentCart);
    console.log('Cart updated', this.cart.value)
  }
  removeQuantity(item: CartItem): void {
    let itemForRemoval!: CartItem;

    let filteredItems = this.cart.value.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next(filteredItems );
  }

  getItemTotal(): number {
    return this.cart.value.reduce((accumulate, item) => {
      return accumulate + item.price * item.quantity;
    }, 0);
  }
}
