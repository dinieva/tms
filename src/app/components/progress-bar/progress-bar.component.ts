import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
    @Input() status!: string;
    @Input() statusAmount!: number;

    calculateMinWidth(): string {
        return `calc((50vw - (40px + 32px + 12px + 12px + 12px + 12px + 6px * (${this.statusAmount} - 1))) / ${this.statusAmount})`;
    }
}
