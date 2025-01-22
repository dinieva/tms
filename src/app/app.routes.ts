import { Routes } from '@angular/router';
import { DesktopComponent } from './pages/desktop-component/desktop.component';
import { MobileComponent } from './pages/mobile-component/mobile.component';

export const routes: Routes = [
    { path: 'mobile', component: MobileComponent },
    {
        path: 'desctop',
        component: DesktopComponent,
        children: [
            { path: 'projects', redirectTo: '/', pathMatch: 'full' },
            { path: 'kanban', redirectTo: '/', pathMatch: 'full' },
            { path: 'team', redirectTo: '/', pathMatch: 'full' },
            { path: 'calendar', redirectTo: '/', pathMatch: 'full' },
        ],
    },
];
