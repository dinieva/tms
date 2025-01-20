import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBlockComponent } from '../tab-block/tab-block.component';
import { AccordionComponent } from '../content-accordion/accordion.component';
import { TasksFacadeService } from 'src/app/services/tasks-service/tasks-facade.service';
import { ITask } from 'src/app/interfaces/interfaces';
import { FilterBlockComponent } from '../filter-block/filter-block.component';

@Component({
    selector: 'app-content',
    imports: [
        CommonModule,
        FilterBlockComponent,
        TabBlockComponent,
        AccordionComponent,
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
    private readonly tasksFacadeService = inject(TasksFacadeService);
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

    ngOnInit(): void {
        this.tasksFacadeService
            .getTasksByAssignee(this.userProfile)
            .subscribe((tasks: ITask[]) => {
                this.userTasks = tasks;
            });

        this.tasksFacadeService
            .getTaskByStatus('in-progress')
            .subscribe((tasks: ITask[]) => {
                this.tasksInProgress = tasks;
            });
        this.tasksFacadeService
            .getTaskByStatus('paused')
            .subscribe((tasks: ITask[]) => {
                this.tasksInPause = tasks;
            });

        this.tasksFacadeService
            .getTasksWithoutAssignee(undefined)
            .subscribe((tasks: ITask[]) => {
                this.tasksWithoutAssignee = tasks;
            });
    }
    /* ngOnInit(): void {
        this.tasksFacadeService
            .getTasksByAssignee(this.userProfile)
            .subscribe((tasks: ITask[]) => {
                this.userTasks = tasks;
            });

        this.tasksFacadeService
            .getTaskByStatus('in-progress')
            .subscribe((tasks: ITask[]) => {
                this.tasksInProgress = tasks;
            });
        this.tasksFacadeService
            .getTaskByStatus('paused')
            .subscribe((tasks: ITask[]) => {
                this.tasksInPause = tasks;
            });

        this.tasksFacadeService
            .getTasksWithoutAssignee(undefined)
            .subscribe((tasks: ITask[]) => {
                this.tasksWithoutAssignee = tasks;
            });
    } */
}
