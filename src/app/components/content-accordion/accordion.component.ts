import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ITask } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-accordion',
    imports: [CommonModule, TaskItemComponent],
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
    @Input() accordionTitle!: string;
    @Input() accordionQuantity!: number;
    @Input() tasks!: ITask[];
}
