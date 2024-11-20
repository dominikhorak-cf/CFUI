import { ReactNode } from 'react';
export type NotificationRoles = 'Info' | 'Success' | 'Warning' | 'Failure';
type RoleDetails = {
    buttonRole: 'default' | 'success' | 'warning' | 'destructive';
    icon?: string;
};
export type NotificationRoleMapping = {
    [K in NotificationRoles]: RoleDetails;
};
export type Notification = {
    id: number;
    role: keyof NotificationRoleMapping;
    message: string;
    icon?: string;
};
export interface NotificationsContextType {
    notifications: Notification[];
    notify: Function;
    close: Function;
}
export declare const useNotification: () => NotificationsContextType | null;
export declare const NotificationProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
