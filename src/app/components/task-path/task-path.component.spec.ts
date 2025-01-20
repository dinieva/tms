import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskPathComponent } from './task-path.component';

describe('TaskPathComponent', () => {
    let component: TaskPathComponent;
    let fixture: ComponentFixture<TaskPathComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TaskPathComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TaskPathComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
