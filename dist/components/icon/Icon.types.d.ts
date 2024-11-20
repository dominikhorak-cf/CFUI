import { HTMLAttributes } from 'react';
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    name: string;
    type?: 'regular' | 'solid' | 'logo';
    size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | string;
    className?: string;
}
