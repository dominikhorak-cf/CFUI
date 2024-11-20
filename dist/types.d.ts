import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';

interface CardProps {
    name: string;
    type: string;
    role?: 'input' | 'textarea' | 'dropdown' | 'daterange';
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    values?: [];
    defaultValue?: string | number | undefined;
    icon?: string;
    className?: {
        card?: string;
        label?: string;
    };
}

declare function Card({ name, type, role, className, required, disabled, placeholder, values, defaultValue, icon, ...props }: CardProps): react_jsx_runtime.JSX.Element;

interface DateRangeProps {
    name?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
    placeholder?: string;
    includeFrom?: boolean;
    includeTo?: boolean;
    includeTime?: boolean;
    disabled?: boolean;
    required?: boolean;
    locale?: string;
    className?: string;
    onSelect?: Function;
    positions?: ('bottom' | 'top' | 'left' | 'right')[];
    align?: 'start' | 'center' | 'end';
}

declare function DateRange({ name, defaultValue, min, max, placeholder, includeFrom, includeTo, includeTime, disabled, required, locale, className, onSelect, positions, align, }: DateRangeProps): react_jsx_runtime.JSX.Element;

interface DropdownProps<T> {
    name?: string;
    values: T[] | undefined;
    defaultValue?: T;
    output?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    allowSearching?: boolean;
    selectMultiple?: boolean;
    allowDeselecting?: boolean;
    onSelect?: Function;
    className?: string;
    positions?: ('bottom' | 'top' | 'left' | 'right')[];
    align?: 'start' | 'center' | 'end';
}

declare function Dropdown<T>({ name, values, defaultValue, output, label, placeholder, disabled, allowSearching, selectMultiple, allowDeselecting, onSelect, className, positions, align, }: DropdownProps<T>): react_jsx_runtime.JSX.Element;

interface MenuProps {
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

declare function Menu({ children, label, icon, checked, orientation, className }: MenuProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    message?: string;
    heading?: string;
    exitType: 'cancel' | 'close';
    onClose?: Function;
    className?: string;
}

declare function Modal({ children, isOpen, message, heading, exitType, onClose }: ModalProps): react_jsx_runtime.JSX.Element;

interface PageBarProps {
    itemCount: number;
    pageSize: number;
    currentPage: number;
    onClick: Function;
}

declare function PageBar({ itemCount, pageSize, currentPage, onClick, }: PageBarProps): react_jsx_runtime.JSX.Element | null;

declare function NavigationBar({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function Notifications(): react_jsx_runtime.JSX.Element;

declare const Title: () => null;

declare const base: tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>;
declare const text: tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>;
declare const label: tailwind_variants.TVReturnType<{
    textSize: {};
    role: {
        majorHeading: string;
        minorHeading: string;
        title: string;
        subtitle: string;
        hint: string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {};
    role: {
        majorHeading: string;
        minorHeading: string;
        title: string;
        subtitle: string;
        hint: string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>>;
declare const container: tailwind_variants.TVReturnType<{
    shadow: {
        normal: string;
    };
    hover: {
        standout: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "flex-nowrap overflow-hidden text-text dark:text-text-dark", tailwind_variants_dist_config.TVConfig<{
    shadow: {
        normal: string;
    };
    hover: {
        standout: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>;
declare const input: tailwind_variants.TVReturnType<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "transition-colors outline-none disabled:bg-disabled disabled:dark:bg-disabled-dark disabled:text-text/50 disabled:dark:text-text-dark/50", tailwind_variants_dist_config.TVConfig<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>>;
declare const button: tailwind_variants.TVReturnType<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "transition-colors outline-none disabled:bg-disabled disabled:dark:bg-disabled-dark disabled:text-text/50 disabled:dark:text-text-dark/50", tailwind_variants_dist_config.TVConfig<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>>>;
declare const responsiveButton: tailwind_variants.TVReturnType<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "p-0 md:p-2 w-8 md:w-full rounded-full md:rounded-xl aspect-square md:aspect-auto", tailwind_variants_dist_config.TVConfig<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "transition-colors outline-none disabled:bg-disabled disabled:dark:bg-disabled-dark disabled:text-text/50 disabled:dark:text-text-dark/50", tailwind_variants_dist_config.TVConfig<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>>>>;
declare const tag: tailwind_variants.TVReturnType<{
    role: {
        tag: string;
    };
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "hover:brightness-110 active:brightness-75 py-0.5 px-2", tailwind_variants_dist_config.TVConfig<{
    role: {
        tag: string;
    };
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    role: {};
    type: {
        default: string;
        important: string;
    };
    hover: {
        role: string;
    };
    focus: {
        role: string;
    };
    active: {
        role: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "transition-colors outline-none disabled:bg-disabled disabled:dark:bg-disabled-dark disabled:text-text/50 disabled:dark:text-text-dark/50", tailwind_variants_dist_config.TVConfig<{
    role: {
        default: string;
        theme: string;
        success: string;
        warning: string;
        destructive: string;
        critical: string;
    };
    disabled: {
        true: string;
    };
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    textSize: {
        xs: string;
        sm: string;
        default: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        light: string;
        default: string;
        semibold: string;
        bold: string;
    };
    textAlign: {
        start: string;
        center: string;
        end: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>>>>;
declare const menuItem: tailwind_variants.TVReturnType<{
    selected: {
        true: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "text-text dark:text-text-dark text-sm px-2 py-0.5 text-nowrap", tailwind_variants_dist_config.TVConfig<{
    selected: {
        true: string;
    };
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, undefined, "box-border", tailwind_variants_dist_config.TVConfig<{
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}, {
    width: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    height: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
    };
    size: {
        none: string;
        fit: string;
        full: string;
        min: string;
        max: string;
        screen: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    display: {
        flex: string;
        grid: string;
        block: string;
        inline: string;
        none: string;
    };
    shrink: {
        none: string;
        default: string;
    };
    position: {
        relative: string;
        absolute: string;
        static: string;
        fixed: string;
        sticky: string;
    };
    orientation: {
        horizontal: string;
        vertical: string;
    };
    overflow: {
        visible: string;
        hidden: string;
        auto: string;
        scroll: string;
        initial: string;
    };
    align: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
    };
    justify: {
        start: string;
        center: string;
        end: string;
        stretch: string;
        between: string;
        evenly: string;
        'self-start': string;
        'self-center': string;
        'self-end': string;
        'self-stretch': string;
        'self-between': string;
        'self-evenly': string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        default: string;
        xl: string;
        full: string;
    };
    gap: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    p: {
        none: string;
        px: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    m: {
        auto: string;
        'x-auto': string;
        'y-auto': string;
        none: string;
    };
    bg: {
        transparent: string;
        full: string;
        standout: string;
        translucent: string;
    };
    border: {
        none: string;
        solid: string;
        outline: string;
    };
    hover: {
        default: string;
        group: string;
        theme: string;
        none: string;
    };
    active: {
        default: string;
        group: string;
        asHover: string;
        none: string;
    };
    focus: {
        default: string;
        none: string;
    };
    cursor: {
        default: string;
        pointer: string;
    };
    animate: {
        none: string;
        loading: string;
        ping: string;
        bounce: string;
    };
}>, unknown, unknown, undefined>>>;

type NotificationRoles = 'Info' | 'Success' | 'Warning' | 'Failure';
type RoleDetails = {
    buttonRole: 'default' | 'success' | 'warning' | 'destructive';
    icon?: string;
};
type NotificationRoleMapping = {
    [K in NotificationRoles]: RoleDetails;
};
type Notification = {
    id: number;
    role: keyof NotificationRoleMapping;
    message: string;
    icon?: string;
};
interface NotificationsContextType {
    notifications: Notification[];
    notify: Function;
    close: Function;
}
declare const useNotification: () => NotificationsContextType | null;

export { Card, type CardProps, DateRange, type DateRangeProps, Dropdown, type DropdownProps, Menu, type MenuProps, Modal, type ModalProps, NavigationBar, Notifications, PageBar, type PageBarProps, Title, base, button, container, input, label, menuItem, responsiveButton, tag, text, useNotification };
