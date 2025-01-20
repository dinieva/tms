import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ShowDateComponent } from 'src/app/components/show-date/show-date.component';
import { ContentComponent } from 'src/app/components/content/content.component';

@Component({
    selector: 'app-desktop',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterModule,
        HeaderComponent,
        ShowDateComponent,

        ContentComponent,
    ],
    templateUrl: './desktop.component.html',
    styleUrl: './desktop.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent {}
