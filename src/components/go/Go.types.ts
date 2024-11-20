export interface GoProps {
    to: string,
    label: string,
    type: 'default' | 'internal' | 'external',
    icon?: string,
    className?: {
        active?: Record<string, any>,
        inactive?: Record<string, any>,
        default: Record<string, any>
    }
}