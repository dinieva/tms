import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutorNameFormatPipe } from 'src/app/pipes/executor-name-format.pipe';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ITask } from 'src/app/interfaces/interfaces';
import { TaskButtonComponent } from '../task-button/task-button.component';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-task-item',
    imports: [
        CommonModule,
        ExecutorNameFormatPipe,
        ProgressBarComponent,
        TaskButtonComponent,
    ],
    animations: [
        trigger('toggleButtons', [
            state(
                'hidden',
                style({ opacity: 0, transform: 'translateY(100%)' })
            ),
            state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('hidden => visible', [animate('300ms ease-in')]),
            transition('visible => hidden', [animate('800ms ease-out')]),
        ]),
    ],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
    private mouseEnterSubject = new Subject<void>();
    private mouseLeaveSubject = new Subject<void>();
    @Input() task!: ITask;
    protected buttonsBlockState: 'visible' | 'hidden' = 'hidden';
    generalButtons = [
        {
            title: 'Исправить',
            class: 'to-fix',
            iconPath: '/icons/btn-fix.svg',
        },
        {
            title: 'В работу',
            class: 'to-work',
            iconPath: '/icons/btn-work.svg',
        },
        {
            title: 'Принять',
            class: 'to-accept',
            iconPath: '/icons/btn-accept.svg',
        },
    ];

    constructor() {
        this.mouseEnterSubject.pipe(debounceTime(300)).subscribe(() => {
            this.buttonsBlockState = 'visible';
        });

        this.mouseLeaveSubject.pipe(debounceTime(800)).subscribe(() => {
            this.buttonsBlockState = 'hidden';
        });
    }

    onMouseEnter() {
        this.mouseEnterSubject.next();
    }

    onMouseLeave() {
        this.mouseLeaveSubject.next();
    }
}
