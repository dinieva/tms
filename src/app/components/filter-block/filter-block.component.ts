import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Option } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-filter-block',
    imports: [CommonModule, FilterComponent],
    templateUrl: './filter-block.component.html',
    styleUrl: './filter-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBlockComponent {
    options: Option[] = [
        {
            title: 'Все продукты',
            value: 'all',
        },
        {
            iconPath: '/icons/option-logo.svg',
            title: 'Название №1',
            value: 'first',
        },
        {
            iconPath: '/icons/option-logo.svg',
            title: 'Название №2',
            value: 'second',
        },
        {
            iconPath: '/icons/option-logo2.svg',
            title: 'Название №3',
            value: 'third',
        },
    ];
    taskOptions: Option[] = [
        {
            title: 'Все задачи',
            value: 'all',
        },
        {
            iconPath: '/icons/category-general.svg',
            title: 'Общие',
            value: 'general',
        },
        {
            iconPath: '/icons/category-develop.svg',
            title: 'Разработка',
            value: 'develop',
        },
        {
            iconPath: '/icons/category-test.svg',
            title: 'Тестирование',
            value: 'test',
        },
        {
            iconPath: '/icons/category-errors.svg',
            title: 'Ошибки',
            value: 'errors',
        },
    ];
}
