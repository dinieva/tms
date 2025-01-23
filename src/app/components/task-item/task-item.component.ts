import {
    ChangeDetectionStrategy,
    Component,
    effect,
    HostListener,
    inject,
    Input,
    OnInit,
    signal,
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
import { EventServiceService } from 'src/app/services/event-service/event-service-.service';

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
                'close',
                style({ display: 'none', transform: 'translateY(-100%)' })
            ),
            state(
                'open',
                style({ display: 'block', transform: 'translateY(0)' })
            ),
            transition('close => open', [animate('300ms ease-in')]),
            transition('open => close', [animate('800ms ease-out')]),
        ]),
    ],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
    private readonly eventServiceService = inject(EventServiceService);
    private mouseEnterSubject = new Subject<void>();
    private mouseLeaveSubject = new Subject<void>();
    private mouseEnterSubjectHeader = new Subject<void>();
    private mouseLeaveSubjectPath = new Subject<void>();
    private clickSubject = new Subject<void>();

    @Input() task!: ITask;
    @Input() isScrolling!: boolean;
    isMobile = false;
    isHovered = false;
    hideTaskPopupElements = signal<boolean>(false);
    protected buttonsBlockState: 'visible' | 'hidden' = 'hidden';
    protected taskPathState: 'open' | 'close' = 'close';
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
    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isMobile = window.innerWidth < 768;
    }
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: Event) {
        this.isHovered = false;
    }
    constructor() {
        this.onResize();

        effect(() => {
            const value = this.hideTaskPopupElements();
            if (value) {
                this.hiddenTaskBtns();
                this.hiddenTaskPath();
            }
        });

        this.mouseEnterSubject.pipe(debounceTime(300)).subscribe(() => {
            this.hideTaskPopupElements.set(false);
            this.buttonsBlockState = 'visible';
        });

        this.mouseLeaveSubject.pipe(debounceTime(800)).subscribe(() => {
            this.buttonsBlockState = 'hidden';
            this.hideTaskPopupElements.set(false);
            if (this.buttonsBlockState === 'hidden') {
                return;
            }
        });
        this.mouseEnterSubjectHeader.pipe(debounceTime(300)).subscribe(() => {
            this.hideTaskPopupElements.set(false);
            this.taskPathState = 'open';
        });

        this.mouseLeaveSubjectPath.pipe(debounceTime(800)).subscribe(() => {
            this.taskPathState = 'close';
            this.hideTaskPopupElements.set(false);
        });

        this.clickSubject.pipe(debounceTime(300)).subscribe(() => {
            if (this.isMobile) {
                this.hideTaskPopupElements.set(false);
                this.buttonsBlockState = 'visible';
                this.taskPathState = 'open';
            }
        });
    }

    showTaskBtns() {
        if (!this.isHovered) {
            this.isHovered = true;
            if (!this.isMobile) {
                this.mouseEnterSubject.next();
            } else {
                return;
            }
        }
    }

    showTaskPath() {
        if (!this.isHovered) {
            this.isHovered = true;
            if (!this.isMobile) {
                this.mouseEnterSubjectHeader.next();
            } else {
                return;
            }
        }
    }

    hiddenTaskBtns() {
        this.buttonsBlockState = 'hidden';
        this.isHovered = false;
    }
    hiddenTaskPath() {
        this.taskPathState = 'close';
        this.isHovered = false;
    }
    onClick(event: Event) {
        event.stopPropagation();
        if (this.isMobile) {
            this.clickSubject.next();
        } else {
            return;
        }
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
        this.eventServiceService.toogleTaskPopupElements$.subscribe((val) => {
            this.hideTaskPopupElements.set(val);
        });
    }
}
