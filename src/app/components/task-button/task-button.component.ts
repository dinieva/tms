import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-button',
    imports: [CommonModule],
    templateUrl: './task-button.component.html',
    styleUrl: './task-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskButtonComponent {
    @Input() btn!: { title: string; class: string; iconPath: string };
}
