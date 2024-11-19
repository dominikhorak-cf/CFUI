import { ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

export interface MenuProps {
    children: ReactNode,
    label: string,
    icon: string,
    checked: boolean,
    orientation: 'vertical' | 'horizontal',
    className: {
        menu?: string,
        button?: string,
        label?: string
    }
}