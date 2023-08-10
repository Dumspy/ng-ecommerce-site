import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CartService } from 'src/app/services/cart/cart.service';
import { ItemComponent } from "../item/item.component";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart-drawer',
    standalone: true,
    templateUrl: './drawer.component.html',
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('400ms ease-in-out', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                animate('400ms ease-in-out', style({ transform: 'translateX(100%)' }))
            ])
        ])
    ],
    imports: [CommonModule, BrowserAnimationsModule, ItemComponent]
})
export class DrawerComponent {
    cartService = inject(CartService)

    get total() {
        return this.cartService.getTotal()
    }

    get cart() {
        return this.cartService.getItems()
    }

    get quantity() {
        return this.cartService.getQuantity()
    }

    hidden = true

    toggle() {
        this.hidden = !this.hidden
    }
}
