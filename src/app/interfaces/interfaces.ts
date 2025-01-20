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
    status: TaskStatus;
    assignee: Assignee | undefined;
    content: string;
    category: 'general' | 'develop' | 'test' | 'errors';
    iconBgColor: iconBgColor;
    time: string;
    stages: Stage[];
}
