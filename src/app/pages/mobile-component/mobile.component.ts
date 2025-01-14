import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mobile',
    imports: [CommonModule],
    templateUrl: './mobile.component.html',
    styleUrl: './mobile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent {}
