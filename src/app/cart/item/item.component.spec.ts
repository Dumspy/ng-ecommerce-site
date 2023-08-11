import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ItemComponent]
        });
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;

        component.item = {
            id: 1,
            title: 'Test Item',
            price: 10,
            image: 'https://placeholder',
            quantity: 1
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
