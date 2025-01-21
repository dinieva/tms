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
                        task.currentTaskStep === 'pending'
                    );
                })
            )
        );
    }
    getTaskByCurrentTaskStep(param: string): Observable<ITask[]> {
        return this.allTasksSignal.pipe(
            map((tasks) =>
                tasks.filter((task) => task.currentTaskStep === param)
            )
        );
    }

    getTasksWithoutAssignee(param: undefined): Observable<ITask[]> {
        return this.allTasksSignal.pipe(
            map((tasks) => tasks.filter((task) => task.assignee === param))
        );
    }

    filterTasksByCategory(category: string): Observable<ITask[]> {
        if (category === 'all') {
            this.setAllTasks(TASKS);
            return of(TASKS);
        } else {
            const filteredTaskList = TASKS.filter(
                (task) => task.category === category
            );
            this.setAllTasks(filteredTaskList);
            return of(filteredTaskList);
        }
    }
    filterTasksByTaskStatus(tabIndex: number): Observable<ITask[]> {
        if (tabIndex === 0) {
            const filteredTaskList = TASKS.filter(
                (task) => task.status?.engTitle === 'coordination'
            );
            this.setAllTasks(filteredTaskList);
            return of(filteredTaskList);
        }
        if (tabIndex === 1) {
            const filteredTaskList = TASKS.filter(
                (task) => task.status?.engTitle === 'review'
            );
            this.setAllTasks(filteredTaskList);
            return of(filteredTaskList);
        }
        if (tabIndex === 2) {
            const filteredTaskList = TASKS.filter(
                (task) => task.status?.engTitle === 'progress'
            );
            this.setAllTasks(filteredTaskList);
            return of(filteredTaskList);
        }
        if (tabIndex === 3) {
            const filteredTaskList = TASKS.filter(
                (task) => task.status === undefined
            );
            this.setAllTasks(filteredTaskList);
            return of(filteredTaskList);
        } else {
            this.setAllTasks(TASKS);
            return of(TASKS);
        }
    }
}
