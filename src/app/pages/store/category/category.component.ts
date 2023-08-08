import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
    _category: string | undefined
    validCategory = false
    loading = true

    route = inject(ActivatedRoute)
    api = inject(ApiService)

    @Input()
    set category(category: string) {
        this._category = category

        const subscribtion = this.api.getAllCategories().subscribe((categories) => {
            this.loading = false
            this.validCategory = categories.some((c) => c === this._category)
            subscribtion.unsubscribe()
        });
    }
}
