import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutorNameFormatPipe } from 'src/app/pipes/executor-name-format.pipe';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ITask, Stage } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-task-item',
    imports: [CommonModule, ExecutorNameFormatPipe, ProgressBarComponent],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
    @Input() task!: ITask;
    showButtons: boolean = false;
}
