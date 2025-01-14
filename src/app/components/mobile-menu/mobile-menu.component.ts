import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-mobile-menu',
    imports: [CommonModule],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {}
