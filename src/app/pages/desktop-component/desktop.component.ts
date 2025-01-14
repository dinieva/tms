import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-desktop',
    imports: [CommonModule],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent {}
