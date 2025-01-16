import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    Router,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';

type MenuItem = {
    name: string;
    path: string;
    icon: string;
};
@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
    protected readonly menuItems: MenuItem[] = [
        {
            name: 'Главная',
            path: '/',
            icon: 'iconLogoKosmo.svg',
        },
        {
            name: 'Проекты',
            path: '/projects',
            icon: 'projects.svg',
        },
        { name: 'Команда', path: '/team', icon: 'team.svg' },
        {
            name: 'Канбан',
            path: '/kanban',
            icon: 'kanban.svg',
        },
        {
            name: 'Итерации',
            path: '/calendar',
            icon: 'calendar.svg',
        },
    ];

    constructor(private router: Router) {}
    navigateTo(path: string) {
        this.router.navigate([path]);
    }
}
