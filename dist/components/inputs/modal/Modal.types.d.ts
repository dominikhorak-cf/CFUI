import { ReactNode } from 'react';
export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    message?: string;
    heading?: string;
    exitType: 'cancel' | 'close';
    onClose?: Function;
    className?: string;
}
