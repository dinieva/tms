import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabBlockComponent } from './tab-block.component';

describe('TabBlockComponent', () => {
    let component: TabBlockComponent;
    let fixture: ComponentFixture<TabBlockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TabBlockComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TabBlockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
