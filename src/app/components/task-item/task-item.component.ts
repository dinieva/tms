import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutorNameFormatPipe } from 'src/app/pipes/executor-name-format.pipe';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ITask, taskPath } from 'src/app/interfaces/interfaces';
import { TaskButtonComponent } from '../task-button/task-button.component';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { debounceTime, Subject } from 'rxjs';
import { TaskPathComponent } from '../task-path/task-path.component';

@Component({
    selector: 'app-task-item',
    imports: [
        CommonModule,
        ExecutorNameFormatPipe,
        ProgressBarComponent,
        TaskButtonComponent,
        TaskPathComponent,
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
        trigger('taskPath', [
            state(
                'hidden',
                style({ display: 'none', transform: 'translateY(-100%)' })
            ),
            state(
                'visible',
                style({ display: 'block', transform: 'translateY(0)' })
            ),
            transition('hidden => visible', [animate('300ms ease-in')]),
            transition('visible => hidden', [animate('800ms ease-out')]),
        ]),
    ],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
    private mouseEnterSubject = new Subject<void>();
    private mouseLeaveSubject = new Subject<void>();
    private mouseEnterSubjectHeader = new Subject<void>();
    private mouseLeaveSubjectPath = new Subject<void>();

    @Input() task!: ITask;
    protected buttonsBlockState: 'visible' | 'hidden' = 'hidden';
    protected taskPathState: 'visible' | 'hidden' = 'hidden';
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
    inProgressTaskButtons = [
        {
            title: 'На паузу',
            class: 'pause',
            iconPath: '/icons/btn-pause.svg',
        },
        {
            title: 'Готово',
            class: 'done',
            iconPath: '/icons/feature.svg',
        },
    ];
    taskPath: taskPath | undefined;
    constructor() {
        this.mouseEnterSubject.pipe(debounceTime(300)).subscribe(() => {
            this.buttonsBlockState = 'visible';
        });

        this.mouseLeaveSubject.pipe(debounceTime(800)).subscribe(() => {
            this.buttonsBlockState = 'hidden';
        });
        this.mouseEnterSubjectHeader.pipe(debounceTime(300)).subscribe(() => {
            this.taskPathState = 'visible';
        });

        this.mouseLeaveSubjectPath.pipe(debounceTime(800)).subscribe(() => {
            this.taskPathState = 'hidden';
        });
    }
    onMouseLeave() {
        console.log('Событие получено от родителя!');
        this.mouseLeaveSubject.next();
        this.mouseLeaveSubjectPath.next();
    }
    onMouseEnter() {
        this.mouseEnterSubject.next();
    }

    showTaskPath() {
        this.mouseEnterSubjectHeader.next();
    }

    ngOnInit() {
        if (this.task) {
            this.taskPath = {
                project: this.task.project,
                product: this.task.product,
                version: this.task.version,
                feature: this.task.feature,
            };
        }
    }
}
