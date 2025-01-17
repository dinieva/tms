import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBlockComponent } from '../tab-block/tab-block.component';

@Component({
    selector: 'app-content',
    imports: [CommonModule, TabBlockComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
