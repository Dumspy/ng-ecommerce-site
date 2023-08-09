import { Injectable } from '@angular/core';
import { Product } from '../api/types/product.type';

type cartItem = Pick<Product, 'id' | 'title' | 'price' | 'image'> & { quantity: number };

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items: cartItem[] = [];

    constructor() { }

    addToCart(product: Product) {
        const item = this.items.find((item) => item.id === product.id);

        if (item) {
            item.quantity++;
        } else {
            this.items.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
    }

    setQuantity(product: Product, quantity: number) {
        const item = this.items.find((item) => item.id === product.id);

        if (item) {
            if (quantity === 0) {
                this.removeItem(product);
                return;
            }
            item.quantity = quantity;
        }
    }

    clearCart() {
        this.items = [];
    }

    removeItem(product: Product) {
       this.items = this.items.filter((item) => item.id !== product.id);
    }

    getTotalItems() {
        return this.items.reduce((acc, item) => acc + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    getItems() {
        return this.items;
    }
}
