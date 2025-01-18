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
export type Stage = {
    label: string;
    status: 'completed' | 'in-progress' | 'paused' | 'pending';
};

export interface ITask {
    key: string;
    status: string;
    assignee: Assignee | undefined;
    content: string;
    category: string;
    iconBgColor: string;
    time: string;
    stages: Stage[];
}
