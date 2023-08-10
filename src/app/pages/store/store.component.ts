import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, CapitalizePipe]
})
export class StoreComponent implements OnInit{
    categories: string[] = []
    api = inject(ApiService)

    ngOnInit(): void {
        this.api.getAllCategories().subscribe((categories) => {
            this.categories = categories
        })
    }
}
