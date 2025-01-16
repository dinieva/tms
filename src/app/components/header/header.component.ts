import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { DateService } from 'src/app/services/date.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, MenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    private dateService = inject(DateService);
    currentTime: string | undefined = undefined;
    taskMessage: string = 'Не отображается текст "пока нет вопросов", если ';

    ngOnInit(): void {
        this.currentTime = this.dateService.getCurrentTime();
        setInterval(() => this.updateTime(), 60000);
    }

    private updateTime(): void {
        this.currentTime = this.dateService.getCurrentTime();
    }
}
