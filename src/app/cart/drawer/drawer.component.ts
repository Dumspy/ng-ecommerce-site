import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CartService } from 'src/app/services/cart/cart.service';
import { ItemComponent } from "../item/item.component";
import { BehaviorSubject } from 'rxjs';

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
    imports: [CommonModule, ItemComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DrawerComponent {
    constructor(private cartService: CartService) { }

    get total() {
        return this.cartService.getTotal()
    }

    get cart() {
        return this.cartService.getItems()
    }

    get quantity() {
        return this.cartService.getQuantity()
    }

    hidden$ = new BehaviorSubject<boolean>(true)

    toggle() {
        this.hidden$.next(!this.hidden$.getValue())
    }

    clearCart() {
        this.cartService.clearCart()
    }
}
