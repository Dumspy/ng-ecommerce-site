import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/services/api/types/product.type';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-category',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './category.component.html',
})
export class CategoryComponent {
    _category!: string
    validCategory!: boolean
    loading = true

    products: Product[] = []

    route = inject(ActivatedRoute)
    api = inject(ApiService)


    @Input()
    set category(category: string) {
        this._category = category;
        this.products = [];
        this.loadCategoryData();
    }

    private loadCategoryData() {
        this.api.getAllCategories().subscribe((categories) => {
            this.validCategory = categories.includes(this._category);
            this.loading = this.validCategory;

            if (this.validCategory) {
                this.loadProducts();
            }
        });
    }

    private loadProducts() {
        this.api.getProductsByCategory(this._category).subscribe((products) => {
            this.products = products;
            this.loading = false;
        });
    }
}
