import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit{
    categoryTitle!: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.categoryTitle = data['categoryTitle'];
        })
    }
}
