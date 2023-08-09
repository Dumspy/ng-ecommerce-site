import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/services/api/types/product.type';

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
}
