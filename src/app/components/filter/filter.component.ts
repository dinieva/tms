import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-filter',
    imports: [CommonModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    @Input() filterCategory!: string;
    @Input() options!: Option[];
    selectedOption:
        | { iconPath: string; title: string; value: string }
        | undefined = undefined;
    isDropdownOpen: boolean = false;

    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    selectOption(option: {
        iconPath: string;
        title: string;
        value: string;
    }): void {
        this.selectedOption = option;
        this.isDropdownOpen = false;
    }
}
