import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cartItem } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent {
    @Input() item!: cartItem
}
