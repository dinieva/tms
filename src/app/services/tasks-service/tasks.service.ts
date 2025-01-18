import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignee, ITask } from 'src/app/interfaces/interfaces';
import { TASKS } from 'src/app/mock-task-list';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    getTasksByAssignee(param: Assignee): Observable<ITask[]> {
        const filteredTasks = TASKS.filter((task) => {
            console.log(task);

            return (
                task.assignee?.name === param.name &&
                task.assignee?.surname === param.surname &&
                task.status === 'pending'
            );
        });
        return of(filteredTasks);
    }
    getTaskByStatus(param: string): Observable<ITask[]> {
        const filteredTasks = TASKS.filter((task) => task.status === param);
        return of(filteredTasks);
    }
    getTasksWithoutAssignee(param: undefined): Observable<ITask[]> {
        const filteredTasks = TASKS.filter((task) => task.assignee === param);
        return of(filteredTasks);
    }
}
