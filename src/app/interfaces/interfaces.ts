export type Option = {
    iconPath?: string;
    title: string;
    value: string;
};

export type Assignee = {
    name: string;
    surname: string;
    avatarPath: string;
};
export type currentTaskStep =
    | 'completed'
    | 'in-progress'
    | 'paused'
    | 'pending';

export type TaskStatus =
    | { title: 'Согласование'; engTitle: 'coordination' }
    | { title: 'Исполнение'; engTitle: 'progress' }
    | { title: 'Ревью'; engTitle: 'review' }
    | { title: 'Деплой'; engTitle: 'deploy' }
    | { title: 'Тестирование'; engTitle: 'test' }
    | { title: 'Закрыто'; engTitle: 'close' };

export type Stage = {
    label: string;
    step: currentTaskStep;
};

export interface ITask {
    key: string;
    product: Product;
    project: Project;
    version: number;
    feature: string;
    currentTaskStep: currentTaskStep;
    status?: TaskStatus;
    assignee: Assignee | undefined;
    content: string;
    category: 'general' | 'develop' | 'test' | 'errors';
    department?:
        | 'frontend'
        | 'backend'
        | 'testing'
        | 'design'
        | 'analytics'
        | 'hashtag'
        | 'diagram';
    iconBgColor: string;
    spentTime: string;
    plannedTime: string;
    stages: Stage[];
}

export type Project = {
    icon: '/icons/project-icon.svg';
    title: string;
};
export type Product =
    | {
          icon: '/icons/iOS.svg';
          title: 'iOS';
      }
    | {
          icon: '/icons/Android.svg';
          title: 'Android';
      }
    | {
          icon: '/icons/WebSite.svg';
          title: 'WebSite';
      }
    | {
          icon: '/icons/BackEnd.svg';
          title: 'BackEnd';
      }
    | {
          icon: '/icons/WebApp.svg';
          title: 'WebApp';
      };
export type taskPath = {
    project: Project;
    product: Product;
    version: number;
    feature: string;
};
