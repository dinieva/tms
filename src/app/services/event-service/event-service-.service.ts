import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EventServiceService {
    public eventEmitter: EventEmitter<void> = new EventEmitter();
}
