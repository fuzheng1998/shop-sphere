import {Component} from '@angular/core';
import {Cart, CartItem} from "../../model/cart.model";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cart: Cart = {
        items: [
            {product: 'product1', name: 'name1', price: 1, quantity: 1, id: 1},
            {product: 'product2', name: 'name2', price: 2, quantity: 2, id: 2},
            {product: 'product3', name: 'name3', price: 3, quantity: 3, id: 3},
        ]
    };
    dataSources: Array<CartItem> = []

    ngOnInit() {
        this.dataSources = this.cart.items;
    }

    displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'id'];

}
