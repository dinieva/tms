import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    constructor(private router: Router) {
        const isMobile = window.innerWidth < 768;
        this.router.navigate([isMobile ? 'mobile' : '']);
    }
}
