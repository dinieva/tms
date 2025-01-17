import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tab',
    imports: [CommonModule],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
    @Input() title!: string;
    @Input() activeTabIndex!: number;
    @Input() idx!: number;

    get isActive(): boolean {
        return this.activeTabIndex === this.idx;
    }
    handleClick(e: any) {
        console.log(e);

        //
    }
}
