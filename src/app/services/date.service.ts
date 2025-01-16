import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DateService {
    getCurrentTime(): string {
        const now: Date = new Date();
        return now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    }
    getCurrentDate(): string {
        const now: Date = new Date();
        return now.toLocaleString('ru-RU', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });
    }
}
