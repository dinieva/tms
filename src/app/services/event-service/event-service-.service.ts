import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EventServiceService {
    public eventEmitter: EventEmitter<void> = new EventEmitter();
    private toogleTaskPopupElements = new BehaviorSubject<boolean>(false);
    toogleTaskPopupElements$ = this.toogleTaskPopupElements.asObservable();

    hideTaskPopupElements(): void {
        this.toogleTaskPopupElements.next(true);
    }
}
