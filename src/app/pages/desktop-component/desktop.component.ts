import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ShowDateComponent } from 'src/app/components/show-date/show-date.component';
import { FilterBlockComponent } from 'src/app/components/filter-block/filter-block.component';
@Component({
    selector: 'app-desktop',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterModule,
        HeaderComponent,
        ShowDateComponent,
        FilterBlockComponent,
    ],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent {}
