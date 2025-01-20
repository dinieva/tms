import { ITask } from './interfaces/interfaces';

export const userProfile = {
    name: 'Вильгельмина',
    surname: 'Шавшина',
    avatarPath: '/avatar.png',
};
export const TASKS: ITask[] = [
    {
        key: 'TR-321',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Разработка нового компонента для отображения графиков',
        category: 'develop',
        iconBgColor: 'green',
        time: '5ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-322',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Рефакторинг кода модуля авторизации',
        category: 'develop',
        iconBgColor: 'green',
        time: '2ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-121',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Устранить проблемы с кроссбраузерной совместимостью',
        category: 'errors',
        iconBgColor: 'minor',
        time: '',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-122',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Ошибка валидации формы при пустом поле “номер телефона”',
        category: 'errors',
        iconBgColor: 'minor',
        time: '',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-123',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content:
            'Неверное поведение компонента “Главный экран”  при изменении размера окна',
        category: 'errors',
        iconBgColor: 'minor',
        time: '5ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-124',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content:
            'Неверное поведение компонента “Главный экран”  при изменении размера окна',
        category: 'errors',
        iconBgColor: 'disabled',
        time: '',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-125',
        status: 'pending',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content:
            'Неверное поведение компонента “Главный экран”  при изменении размера окна',
        category: 'errors',
        iconBgColor: 'critical',
        time: '12ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-126',
        status: 'pending',
        assignee: undefined,
        content: 'Отсутствует лоадер при загрузке списка вопросов',
        category: 'errors',
        iconBgColor: 'minor',
        time: '12ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-127',
        status: 'pending',
        assignee: undefined,
        content: 'Адаптация макетов под различные устройства',
        category: 'develop',
        iconBgColor: 'aqua',
        time: '5ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-128',
        status: 'pending',
        assignee: undefined,
        content: 'Создание многоуровневого выпадающего меню',
        category: 'develop',
        iconBgColor: 'green',
        time: '1ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-129',
        status: 'pending',
        assignee: undefined,
        content: 'Создание кастомного компонента для загрузки файлов',
        category: 'develop',
        iconBgColor: 'green',
        time: '30 м',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-130',
        status: 'pending',
        assignee: undefined,
        content: 'Подключение и настройка системы международных переводов',
        category: 'develop',
        iconBgColor: 'green',
        time: '12ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-133',
        status: 'pending',
        assignee: undefined,
        content: 'Интеграция с системой аутентификации через OAuth',
        category: 'develop',
        iconBgColor: 'green',
        time: '',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-345',
        status: 'pending',
        assignee: undefined,
        content: 'Создание адаптивной версии страницы Профиль',
        category: 'develop',
        iconBgColor: 'green',
        time: ' ',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-333',
        status: 'pending',
        assignee: undefined,
        content: 'Верстка страницы Отпуска и Больничные',
        category: 'develop',
        iconBgColor: 'green',
        time: '24ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-321',
        status: 'pending',
        assignee: undefined,
        content: 'Возможность брать больничные не админу',
        category: 'develop',
        iconBgColor: 'green',
        time: '10ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-323',
        status: 'in-progress',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Разработка нового интерфейса для панели управления',
        category: 'develop',
        iconBgColor: 'green',
        time: '8ч 53м',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'completed' },
            { label: 'Этап 3', status: 'in-progress' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-401',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Drag n drop доступен не админам',
        category: 'develop',
        iconBgColor: 'critical',
        time: '1ч / 2ч',
        stages: [
            { label: 'Этап 1', status: 'paused' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
            { label: 'Этап 4', status: 'pending' },
        ],
    },
    {
        key: 'TR-47',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content:
            'Не отображается дефолтная иконка, если пользователь при создании проекта не загрузил свою',
        category: 'errors',
        iconBgColor: 'trivial',
        time: '1ч / 2ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'paused' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-31',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Создание адаптивной версии главной страницы',
        category: 'errors',
        iconBgColor: 'dusty-blue',
        time: '1ч / 4ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-33',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Разработка и интеграция формы обратной связи',
        category: 'errors',
        iconBgColor: 'dusty-blue',
        time: '25м / 1ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-35',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Улучшение производительности рендеринга страницы',
        category: 'develop',
        iconBgColor: 'green',
        time: '5ч / 10ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-36',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Рефакторинг CSS и SCSS для улучшения читаемости',
        category: 'develop',
        iconBgColor: 'green',
        time: '50м / 1ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-37',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Разработка модального окна для подтверждения действий',
        category: 'develop',
        iconBgColor: 'green',
        time: '3ч / 4ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-38',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Интеграция анимаций при прокрутке страницы',
        category: 'develop',
        iconBgColor: 'green',
        time: '2ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-39',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content:
            'Оптимизация загрузки изображений с использованием lazy loading',
        category: 'develop',
        iconBgColor: 'green',
        time: '1ч / 6ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-41',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Разработка компонента фильтрации данных',
        category: 'develop',
        iconBgColor: 'green',
        time: '1ч / 7ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-45',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Создание карточки товара с динамическим контентом',
        category: 'develop',
        iconBgColor: 'green',
        time: '2ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-48',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Настройка и интеграция системы отображения уведомлений',
        category: 'develop',
        iconBgColor: 'green',
        time: '45м',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-56',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Создание кастомного компонента для загрузки файлов',
        category: 'develop',
        iconBgColor: 'green',
        time: '1ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
    {
        key: 'TR-67',
        status: 'paused',
        assignee: {
            name: 'Вильгельмина',
            surname: 'Шавшина',
            avatarPath: '/avatar.png',
        },
        content: 'Реализация эффекта параллакса для секции сайта',
        category: 'develop',
        iconBgColor: 'green',
        time: '3ч / 10ч',
        stages: [
            { label: 'Этап 1', status: 'completed' },
            { label: 'Этап 2', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
            { label: 'Этап 3', status: 'pending' },
        ],
    },
];
