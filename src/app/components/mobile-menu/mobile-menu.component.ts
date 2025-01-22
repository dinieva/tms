import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type MenuItem = {
    name: string;
    path: string;
    icon: string;
};

@Component({
    selector: 'app-mobile-menu',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
    public teamNotification: number = 16;
    public messageNotification: number = 8;
    protected readonly menuItems: MenuItem[] = [
        {
            name: 'Команда',
            path: '/team',
            icon: 'tab-menu-team.svg',
        },
        {
            name: 'Главная',
            path: '/projects',
            icon: 'tab-menu-badge.svg',
        },

        {
            name: 'Сообщения',
            path: '/message',
            icon: 'tab-menu.svg',
        },
    ];
}
