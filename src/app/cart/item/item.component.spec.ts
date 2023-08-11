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
            image: 'test.jpg',
            quantity: 3,
        }

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call the increase quantity function when the increased button is clicked', () => {
        spyOn(component, 'increaseQuantity');

        const button = fixture.nativeElement.querySelector('[aria-label="Increase quantity"]');
        button.click();

        expect(component.increaseQuantity).toHaveBeenCalled();
    });

    it('should call the decrease quantity function when the decreased button is clicked', () => {
        spyOn(component, 'decreaseQuantity');

        const button = fixture.nativeElement.querySelector('[aria-label="Decrease quantity"]') as HTMLButtonElement;
        button.click();

        expect(component.decreaseQuantity).toHaveBeenCalled();
    });

    it('should match displayed quantity with component.item.quantity', () => {
        const quantity = fixture.nativeElement.querySelector('[aria-label="Quantity"]') as HTMLButtonElement;

        expect(quantity.textContent).toContain(component.item.quantity);

        component.item.quantity = 5;
        fixture.detectChanges();

        expect(quantity.textContent).toContain(component.item.quantity);
    })

    it('should emit the item when the remove button is clicked', () => {
        spyOn(component, 'removeItem');

        const button = fixture.nativeElement.querySelector('[aria-label="Remove '+component.item.title+' from cart"]') as HTMLButtonElement;
        button.click();

        expect(component.removeItem).toHaveBeenCalledWith();
    });
});
