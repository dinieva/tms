import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EventServiceService {
    private toogleTaskPopupElements = new BehaviorSubject<boolean>(false);
    toogleTaskPopupElements$ = this.toogleTaskPopupElements.asObservable();

    hideTaskPopupElements(): void {
        this.toogleTaskPopupElements.next(true);
    }
}
