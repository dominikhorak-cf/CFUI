import { ReactNode } from 'react';
export interface MenuProps {
    children: ReactNode;
    label: string;
    icon: string;
    checked: boolean;
    orientation: 'vertical' | 'horizontal';
    className: {
        menu?: string;
        button?: string;
        label?: string;
    };
}
