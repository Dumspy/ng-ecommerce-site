import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentRoute!: string

    cartService = inject(CartService)

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                const baseRoute = event.url.split('/')[1] || 'home'
                if(this.currentRoute === baseRoute) return
                this.currentRoute = baseRoute
            }
        })
    }

    openCart(){
        console.log(this.cartService.getItems())
    }
}
