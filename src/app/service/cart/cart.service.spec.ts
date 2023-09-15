import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to cart', () => {
    const item = {
      product: 'https://placehold.co/150',
      name: 'Product 4',
      price: 400,
      quantity: 4,
      id: 4,
    };
    service.addToCart(item);
    expect(service.cart.value.length).toBe(4);
  });

  it('should remove item from cart', () => {
    const item = {
      product: 'https://placehold.co/150',
      name: 'Product 4',
      price: 400,
      quantity: 4,
      id: 4,
    };
    service.addToCart(item);
    service.removeFromCart(item);
    expect(service.cart.value.length).toBe(3);
  });

  it('should clear cart', () => {
    service.clearCart();
    expect(service.cart.value.length).toBe(0);
  });

  it('should remove quantity', () => {
    const item = {
      product: 'https://placehold.co/150',
      name: 'Product 4',
      price: 400,
      quantity: 4,
      id: 4,
    };
    service.addToCart(item);
    service.removeQuantity(item);
    expect(service.cart.value[3].quantity).toBe(3);
  });
});
