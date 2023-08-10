import { Injectable } from '@angular/core';
import { Product } from '../api/types/product.type';
import { BehaviorSubject, map } from 'rxjs';

export type cartItem = Pick<Product, 'id' | 'title' | 'price' | 'image'> & { quantity: number };

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cart$ = new BehaviorSubject<cartItem[]>([]);

    addToCart(product: Product) {
        const cart = [...this.cart$.getValue()]
        const item = cart.find((item) => item.id === product.id);

        if (item) {
            item.quantity++;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        this.cart$.next(cart);
    }

    setQuantity(product: Product, quantity: number) {
        const cart = [...this.cart$.getValue()]
        const item = cart.find((item) => item.id === product.id);

        if (!item) { return }
        if (quantity === 0) {
            this.removeItem(product);
            return;
        }

        item.quantity = quantity;

        this.cart$.next(cart);
    }

    clearCart() {
        this.cart$.next([]);
    }

    removeItem(product: Product) {
        const cart = [...this.cart$.getValue()]
        const item = cart.find((item) => item.id === product.id);

        if (!item) { return }

        this.cart$.next(cart.filter((item) => item.id !== product.id))
    }

    getQuantity() {
        return this.cart$.pipe(
            map((items) => items.reduce((acc, item) => acc + item.quantity, 0))
        );
    }

    getTotal() {
        return this.cart$.pipe(
            map((items) => items.reduce((acc, item) => acc + item.price * item.quantity, 0))
        );
    }

    getItems() {
        return this.cart$.asObservable();
    }
}
