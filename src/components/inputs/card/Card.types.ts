import { button, input } from "components/defaultVariants"
import { VariantProps } from "tailwind-variants"

export interface CardProps {
    name: string
    type: string
    role?: 'input' | 'textarea' | 'dropdown' | 'daterange'
    required?: boolean
    disabled?: boolean
    placeholder?: string
    values?: [],
    defaultValue?: string | number | undefined
    icon?: string
    className?: {
        card?: VariantProps<typeof input>,
        label?: string,
    }
}