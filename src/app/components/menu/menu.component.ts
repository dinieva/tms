import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'app-menu',
    imports: [CommonModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
    protected readonly menuItems: { name: string; path: string }[] = [
        { name: 'Главная', path: '/' },
        { name: 'Проекты', path: '/projects' },
        { name: 'Команда', path: '/team' },
        { name: 'Канбан', path: '/kanban' },
        { name: 'Итерации', path: '/iterations' },
    ];

    constructor(private router: Router) {}

    navigateTo(path: string) {
        this.router.navigate([path]);
    }
}
