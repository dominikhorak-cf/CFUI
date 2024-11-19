export interface DropdownProps<T> {
    name?: string,
    values: T[] | undefined,
    defaultValue?: T,
    output?: string,
    label?: string,
    placeholder?: string,
    disabled?: boolean,
    allowSearching?: boolean,
    selectMultiple?: boolean,
    allowDeselecting?: boolean,
    onSelect?: Function,
    className?: {
        button?: string
        
    },
    positions?: ('bottom' | 'top' | 'left' | 'right')[],
    align?: 'start' | 'center' | 'end',
}