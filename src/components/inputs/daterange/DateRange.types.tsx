export interface DateRangeProps {
    name?: string,
    defaultValue?: string,
    min?: string,
    max?: string,
    placeholder?: string,
    includeFrom?: boolean,
    includeTo?: boolean,
    includeTime?: boolean,
    disabled?: boolean,
    required?: boolean,
    locale?: string
    className?: string,
    onSelect?: Function,
    positions?: ('bottom' | 'top' | 'left' | 'right')[],
    align?: 'start' | 'center' | 'end',
}