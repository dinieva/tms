import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { TasksFacadeService } from 'src/app/services/tasks-service/tasks-facade.service';
import { map } from 'rxjs';

@Component({
    selector: 'app-tab-block',
    imports: [CommonModule, TabComponent],
    templateUrl: './tab-block.component.html',
    styleUrl: './tab-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBlockComponent {
    private readonly tasksFacadeService = inject(TasksFacadeService);
    activeTabIndex: number = 2;
    @Output() activeTabChange = new EventEmitter<number>();
    tabs: { idx: number; title: string; quantity: number }[] = [
        { idx: 0, title: 'На согласование: ', quantity: 1 },
        { idx: 1, title: 'На ревью:', quantity: 3 },
        { idx: 2, title: 'Для работы: ', quantity: 16 },
        { idx: 3, title: 'Черновики: ', quantity: 2 },
    ];
    setActiveTab(index: number): void {
        this.activeTabIndex = index;
        this.activeTabChange.emit(this.activeTabIndex);
        this.tasksFacadeService.filterTasksByTaskStatus(this.activeTabIndex);
    }
}
