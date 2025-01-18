import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    activeTabIndex: number = 0;
    tabs: string[] = [
        'На согласование: ',
        'На ревью:',
        'Для работы: ',
        'Черновики: ',
    ];
    setActiveTab(index: number) {
        this.activeTabIndex = index;
    }
}
