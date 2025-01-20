import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { taskPath } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-task-path',
    imports: [CommonModule],
    templateUrl: './task-path.component.html',
    styleUrl: './task-path.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPathComponent {
    @Input() taskPath!: taskPath | undefined;
}
