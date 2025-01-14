import { Routes } from '@angular/router';
import { DesktopComponent } from './pages/desktop-component/desktop.component';
import { MobileComponent } from './pages/mobile-component/mobile.component';

export const routes: Routes = [
    { path: 'mobile', component: MobileComponent },
    { path: '', component: DesktopComponent },
];
