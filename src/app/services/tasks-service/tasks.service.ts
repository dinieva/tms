import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject, switchMap } from 'rxjs';
import { Assignee, ITask } from 'src/app/interfaces/interfaces';
import { TASKS } from 'src/app/mock-task-list';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private categoryFilterSubject = new Subject<string>();
    data$ = this.categoryFilterSubject.asObservable();

    updateData(data: string): void {
        this.categoryFilterSubject.next(data);
    }

    private allTasksSubject = new BehaviorSubject<ITask[]>(TASKS);
    allTasksSignal = this.allTasksSubject.asObservable();
    setAllTasks(tasks: ITask[]) {
        this.allTasksSubject.next(tasks);
    }

    getTasksByAssignee(param: Assignee): Observable<ITask[]> {
        return this.allTasksSignal.pipe(
            map((tasks) =>
                tasks.filter((task) => {
                    return (
                        task.assignee?.name === param.name &&
                        task.assignee?.surname === param.surname &&
                        task.status === 'pending'
                    );
                })
            )
        );
    }
    getTaskByStatus(param: string): Observable<ITask[]> {
        return this.allTasksSignal.pipe(
            map((tasks) => tasks.filter((task) => task.status === param))
        );
    }

    getTasksWithoutAssignee(param: undefined): Observable<ITask[]> {
        return this.allTasksSignal.pipe(
            map((tasks) => tasks.filter((task) => task.assignee === param))
        );
    }

    filterTasksByCategory(category: string): Observable<ITask[]> {
        const filteredTaskList = TASKS.filter(
            (task) => task.category === category
        );
        this.setAllTasks(filteredTaskList);
        return of(filteredTaskList);
    }
}
