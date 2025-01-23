import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from 'src/app/components/content-accordion/accordion.component';
import { TabBlockComponent } from 'src/app/components/tab-block/tab-block.component';
import { TasksFacadeService } from 'src/app/services/tasks-service/tasks-facade.service';
import { ITask } from 'src/app/interfaces/interfaces';
import { MobileMenuComponent } from 'src/app/components/mobile-menu/mobile-menu.component';
import { EventServiceService } from 'src/app/services/event-service/event-service-.service';

@Component({
    selector: 'app-mobile',
    imports: [
        CommonModule,
        TabBlockComponent,
        AccordionComponent,
        MobileMenuComponent,
    ],
    templateUrl: './mobile.component.html',
    styleUrl: './mobile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent implements OnInit {
    private readonly tasksFacadeService = inject(TasksFacadeService);
    private readonly eventServiceService = inject(EventServiceService);
    private readonly userProfile = {
        name: 'Вильгельмина',
        surname: 'Шавшина',
        avatarPath: '/avatar.png',
    };
    categoryToFilter = signal<
        'general' | 'develop' | 'test' | 'errors' | 'all'
    >('all');
    tasksInProgress: ITask[] = [];
    tasksInPause: ITask[] = [];
    userTasks: ITask[] = [];
    tasksWithoutAssignee: ITask[] = [];
    activeTabIndex: number = 2;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        this.handleClick();
    }
    handleClick() {
        this.eventServiceService.hideTaskPopupElements();
    }

    ngOnInit(): void {
        this.tasksFacadeService
            .getTasksByAssignee(this.userProfile)
            .subscribe((tasks: ITask[]) => {
                this.userTasks = tasks;
            });

        this.tasksFacadeService
            .getTaskByCurrentTaskStep('in-progress')
            .subscribe((tasks: ITask[]) => {
                this.tasksInProgress = tasks;
            });
        this.tasksFacadeService
            .getTaskByCurrentTaskStep('paused')
            .subscribe((tasks: ITask[]) => {
                this.tasksInPause = tasks;
            });

        this.tasksFacadeService
            .getTasksWithoutAssignee(undefined)
            .subscribe((tasks: ITask[]) => {
                this.tasksWithoutAssignee = tasks;
            });
    }
}
