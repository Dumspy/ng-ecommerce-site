import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponent } from './drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DrawerComponent, BrowserAnimationsModule]
        });
        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not display the drawer when hidden is true', () => {
        component.hidden = true;
        fixture.detectChanges();

        const drawer = fixture.nativeElement.querySelector('*');

        expect(drawer).toBeFalsy();
    })

    it('should display the drawer when hidden is false', () => {
        component.hidden = false;
        fixture.detectChanges();

        const drawer = fixture.nativeElement.querySelector('*');

        expect(drawer).toBeTruthy();
    })
});
