import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateService } from 'src/app/services/date.service';

@Component({
    selector: 'app-show-date',
    imports: [CommonModule],
    templateUrl: './show-date.component.html',
    styleUrl: './show-date.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDateComponent implements OnInit {
    private dateService = inject(DateService);
    currentDate: string | undefined = undefined;

    ngOnInit(): void {
        this.updateDate();
        setInterval(() => this.updateDate(), 60000);
    }

    private updateDate(): void {
        this.currentDate = this.dateService.getCurrentDate();
    }
}
