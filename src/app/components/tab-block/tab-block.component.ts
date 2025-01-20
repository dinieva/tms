import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tab-block',
    imports: [CommonModule, TabComponent],
    templateUrl: './tab-block.component.html',
    styleUrl: './tab-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBlockComponent {
    activeTabIndex: number = 2;
    @Output() activeTabChange = new EventEmitter<number>();
    tabs: { title: string; amount: number }[] = [
        { title: 'На согласование: ', amount: 1 },
        { title: 'На ревью:', amount: 3 },
        { title: 'Для работы: ', amount: 16 },
        { title: 'Черновики: ', amount: 2 },
    ];
    setActiveTab(index: number) {
        this.activeTabIndex = index;
        this.activeTabChange.emit(this.activeTabIndex);
    }
}
