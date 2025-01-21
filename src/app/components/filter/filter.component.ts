import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from 'src/app/interfaces/interfaces';
import { TasksFacadeService } from 'src/app/services/tasks-service/tasks-facade.service';

@Component({
    selector: 'app-filter',
    imports: [CommonModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    private readonly tasksFacadeService = inject(TasksFacadeService);
    @Input() filterCategory!: string;
    @Input() options!: Option[];

    selectedOption: Option | undefined = undefined;
    isDropdownOpen: boolean = false;

    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    selectOption(option: Option): void {
        this.selectedOption = option;
        this.tasksFacadeService.filterTasksByCategory(option.value);
        this.isDropdownOpen = false;
    }
}
