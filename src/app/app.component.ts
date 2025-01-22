import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DesktopComponent } from './pages/desktop-component/desktop.component';
import { MobileComponent } from './pages/mobile-component/mobile.component';

@Component({
    imports: [RouterModule, DesktopComponent, MobileComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    isMobile: boolean = false;

    constructor() {
        this.checkScreenSize();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.checkScreenSize();
    }

    private checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
    }
}
