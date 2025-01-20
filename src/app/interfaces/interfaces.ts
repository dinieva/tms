export type Option = {
    iconPath: string;
    title: string;
    value: string;
};

export type Assignee = {
    name: string;
    surname: string;
    avatarPath: string;
};
export type TaskStatus = 'completed' | 'in-progress' | 'paused' | 'pending';

export type TaskType =
    | { type: 'general' }
    | { type: 'develop' }
    | { type: 'test' }
    | { type: 'errors' }
    | { type: 'all' };

export type iconBgColor =
    | 'green'
    | 'critical'
    | 'major'
    | 'minor'
    | 'trivial'
    | 'disabled'
    | 'aqua'
    | 'dusty-blue';

export type Stage = {
    label: string;
    status: TaskStatus;
};

export interface ITask {
    key: string;
    product: Product;
    project: Project;
    version: number;
    feature: string;
    status: TaskStatus;
    assignee: Assignee | undefined;
    content: string;
    category: 'general' | 'develop' | 'test' | 'errors';
    iconBgColor: iconBgColor;
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
