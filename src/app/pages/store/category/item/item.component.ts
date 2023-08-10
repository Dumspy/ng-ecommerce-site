import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/services/api/types/product.type';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent {
    @Input() product!: Product

    cartService = inject(CartService)

    addToCart() {
        this.cartService.addToCart(this.product)
    }
}