import { inject, Injectable } from '@angular/core';
import { TasksService } from './tasks.service';
import { Observable } from 'rxjs';
import { Assignee, ITask } from 'src/app/interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class TasksFacadeService {
    private readonly tasksService = inject(TasksService);

    getTasksByAssignee(param: Assignee): Observable<ITask[]> {
        return this.tasksService.getTasksByAssignee(param);
    }
    getTaskByStatus(param: string): Observable<ITask[]> {
        return this.tasksService.getTaskByStatus(param);
    }
    getTasksWithoutAssignee(param: undefined): Observable<ITask[]> {
        return this.tasksService.getTasksWithoutAssignee(param);
    }
}
