
import { tv } from 'tailwind-variants'

export const base = tv(
    {
        'base': 'box-border',
        'variants': {
            'width': {
                'none': 'w-0',
                'fit': 'w-fit',
                'full': 'w-full',
                'min': 'w-min',
                'max': 'w-max',
                'screen': 'w-screen'
            },
            'height': {
                'none': 'h-0',
                'fit': 'h-fit',
                'full': 'h-full',
                'min': 'h-min',
                'max': 'h-max',
                'screen': 'h-dvh',
            },
            'size': {
                'none': 'size-0',
                'fit': 'w-fit h-fit',
                'full': 'w-full h-full',
                'min': 'w-min h-min',
                'max': 'w-max h-max',
                'screen': 'w-screen h-dvh',
                'xs': 'size-4',
                'sm': 'size-8',
                'md': 'size-16',
                'lg': 'size-24',
                'xl': 'size-32',
            },
            'display': {
                'flex': 'flex',
                'grid': 'grid',
                'block': 'block',
                'inline': 'inline-block',
                'none': 'hidden',
            },
            'shrink': {
                'none': 'shrink-0',
                'default': 'shrink'
            },
            'position': {
                'relative': 'relative',
                'absolute': 'absolute',
                'static': 'static',
                'fixed': 'fixed',
                'sticky': 'sticky',
            },
            'orientation': {
                'horizontal': 'flex-row',
                'vertical': 'flex-col'
            },
            'overflow': {
                'visible': 'overflow-visible',
                'hidden': 'overflow-hidden',
                'auto': 'overflow-auto',
                'scroll': 'overflow-scroll',
                'initial': 'overflow-initial',
            },
            'align': {
                'start': 'items-start',
                'center': 'items-center',
                'end': 'items-end',
                'stretch': 'items-stretch',
                'self-start': 'self-start',
                'self-center': 'self-center',
                'self-end': 'self-end',
                'self-stretch': 'self-stretch',
            },
            'justify': {
                'start': 'justify-start',
                'center': 'justify-center',
                'end': 'justify-end',
                'stretch': 'justify-stretch',
                'between': 'justify-between',
                'evenly': 'justify-evenly',
                'self-start': 'justify-self-start',
                'self-center': 'justify-self-center',
                'self-end': 'justify-self-end',
                'self-stretch': 'justify-self-stretch',
                'self-between': 'justify-self-between',
                'self-evenly': 'justify-self-evenly',
            },
            'rounded': {
                'none': 'rounded-0',
                'sm': 'rounded-sm',
                'md': 'rounded-md',
                'default': 'rounded-lg',
                'xl': 'rounded-xl',
                'full': 'rounded-full',
            },
            'gap': {
                'none': 'gap-0',
                'px': 'gap-px',
                'xs': 'gap-1',
                'sm': 'gap-2',
                'md': 'gap-4',
                'lg': 'gap-8',
            },
            'p': {
                'none': 'p-0',
                'px': 'p-px',
                'xs': 'p-0.5',
                'sm': 'p-2',
                'md': 'p-4',
                'lg': 'p-8',
            },
            'm': {
                'auto': 'm-auto',
                'x-auto': 'mx-auto',
                'y-auto': 'my-auto',
                'none': 'm-none'
            },
            'bg': {
                'transparent': 'bg-transparent',
                'full': 'bg-bg dark:bg-bg-dark',
                'standout': 'bg-standout dark:bg-standout-dark',
                'translucent': 'bg-bg/25 dark:bg-bg-dark/25 backdrop-blur-md'
            },
            'border': {
                'none': 'border-0 border-none',
                'solid': 'border-2 border-solid border-current',
                'outline': 'border border-solid border-hover dark:border-hover-dark'
            },
            'hover': {
                'default': 'hover:bg-hover hover:dark:bg-hover-dark',
                'group': 'group-hover:bg-hover group-hover:dark:bg-hover-dark',
                'theme': 'hover:bg-theme hover:dark:bg-theme-dark hover:text-text-dark dark:hover:text-text-dark',
                'none': '',
            },
            'active': {
                'default': 'active:bg-active active:dark:bg-active-dark',
                'group': 'group-active:bg-active group-active:dark:bg-active-dark',
                'asHover': 'active:bg-hover active:dark:bg-hover-dark',
                'none': '',
            },
            'focus': {
                'default': 'focus:bg-hover focus:dark:bg-hover-dark',
                'none': '',
            },
            'cursor': {
                'default': 'cursor-default',
                'pointer': 'cursor-pointer',
            },
            'animate': {
                'none': 'animate-none',
                'loading': 'animate-spin',
                'ping': 'animate-ping',
                'bounce': 'animate-bounce',
            },
        }
    }
)

export const text = tv(
    {
        'extend': base,
        'variants': {
            'textSize': {
                'xs': 'text-xs',
                'sm': 'text-sm',
                'default': 'text-base',
                'lg': 'text-lg',
                'xl': 'text-xl',
                '2xl': 'text-2xl',
            },
            'weight': {
                'light': 'font-light',
                'default': 'font-normal',
                'semibold': 'font-semibold',
                'bold': 'font-bold',
            },
            'textAlign': {
                'start': 'text-left',
                'center': 'text-center',
                'end': 'text-right',
            }
        },
        'compoundVariants': [
            {
                'type': ['majorHeading', 'minorHeading', 'title', 'subtitle'],
                'class': 'font-bold'
            }
        ],
        'defaultVariants': {
            'textSize': 'default',
        }
    }
)

export const label = tv(
    {
        'extend': text,
        'variants': {
            'textSize': {},
            'role': {
                'majorHeading': 'text-5xl',
                'minorHeading': 'text-4xl',
                'title': 'text-2xl',
                'subtitle': 'text-xl',
                'hint': 'text-sm text-hint dark:text-hint-dark'
            },
        },
        'compoundVariants': [
            {
                'role': ['majorHeading', 'minorHeading', 'title', 'subtitle'],
                'class': 'font-bold'
            }
        ],
    }
)

export const container = tv(
    {
        'extend': base,
        'base': 'flex-nowrap overflow-hidden text-text dark:text-text-dark',
        'variants': {
            'shadow': {
                'normal': 'shadow-lg shadow-shadow/25 dark:shadow-shadow-dark/25',
            },
            'hover': {
                'standout': 'hover:scale-[101%] transform-gpu transition-all'
            }
        },
        'defaultVariants': {
            'display': 'flex',
            'shrink': 'none',
            'orientation': 'vertical',
            'rounded': 'md',
            'gap': 'md',
            'p': 'md'
        }
    }
)

export const input = tv(
    {
        'extend': text,
        'base': 'transition-colors outline-none disabled:bg-disabled disabled:dark:bg-disabled-dark disabled:text-text/50 disabled:dark:text-text-dark/50',
        'variants': {
            'role': {
                'default': 'text-inherit',
                'theme': 'text-theme dark:text-theme',
                'success': 'text-success dark:text-success-dark',
                'warning': 'text-warning dark:text-warning-dark',
                'destructive': 'text-error dark:text-error-dark',
                'critical': 'text-critical dark:text-critical-dark'
            },
            'disabled': {
                'true': 'cursor-default',
            },
        },
        'compoundVariants': [
            {
                'type': 'default',
                'disabled': 'true',
                'class': 'text-disabled dark:text-disabled-dark'
            },
            {
                'p': 'xs',
                'rounded': 'full',
                'class': 'px-2'
            },
        ],
        'defaultVariants': {
            'display': 'flex',
            'orientation': 'horizontal',
            'width': 'fit',
            'height': 'fit',
            'border': 'outline',
            'hover': 'default',
            'active': 'asHover',
            'focus': 'default',
            'role': 'default',
            'type': 'default',
            'align': 'center',
            'textSize': 'sm',
            'rounded': 'xl',
            'p': 'sm',
            'gap': 'sm',
        }
    }
)

export const button = tv(
    {
        'extend': input,
        'variants': {
            'role': {},
            'type': {
                'default': '',
                'important': 'text-bg dark:text-bg',
            },
            'hover': {
                'role': ''
            },
            'focus': {
                'role': ''
            },
            'active': {
                'role': ''
            }
        },
        'compoundVariants': [
            {
                'type': 'default',
                'hover': 'role',
                'class': 'hover:bg-hover hover:dark:bg-hover-dark'
            },
            {
                'type': 'default',
                'focus': 'role',
                'class': 'focus:bg-focus focus:dark:bg-focus-dark'
            },
            {
                'type': 'important',
                'hover': 'role',
                'class': 'hover:brightness-110'
            },
            {
                'type': 'important',
                'focus': 'role',
                'class': 'active:brightness-90'
            },
            {
                'border': 'default',
                'type': 'important',
                'class': 'border-0 border-none',
            },
            {
                'type': 'important',
                'role': 'default',
                'class': 'bg-theme dark:bg-theme text-white dark:text-white',
            },
            {
                'type': 'important',
                'role': 'success',
                'class': 'bg-success dark:bg-success-dark',
            },
            {
                'type': 'important',
                'role': 'warning',
                'class': 'bg-warning dark:bg-warning-dark',
            },
            {
                'type': 'important',
                'role': 'destructive',
                'class': 'bg-error dark:bg-error-dark',
            },
            {
                'type': 'important',
                'role': 'critical',
                'class': 'bg-critical dark:bg-critical-dark',
            },
            {
                'type': 'important',
                'disabled': 'true',
                'class': 'bg-disabled dark:bg-disabled-dark text-disabled-dark dark:text-disabled',
            },
        ],
        'defaultVariants': {
            'justify': 'center',
            'border': 'none',
            'hover': 'role',
            'focus': 'role',
            'active': 'default',
        }
    }
)

export const responsiveButton = tv(
    {
        'extend': button,
        'base': 'p-0 md:p-2 w-8 md:w-full rounded-full md:rounded-xl aspect-square md:aspect-auto',
        'defaultVariants': {
            'gap': 'xs',
            'p': null,
            'width': null,
            'height': null,
            'rounded': null,
        }
    }
)

export const tag = tv(
    {
        'extend': button,
        'base': 'hover:brightness-110 active:brightness-75 text-xs py-0.5 px-2',
        'variants': {
            'role': {
                'tag': 'bg-hint-light dark:bg-hint-dark text-text dark:text-text-dark'
            }
        },
        'defaultVariants': {
            'type': 'important',
            'textSize': 'none',
            'p': null,
            'border': 'none',
            'role': 'tag',
        }
    }
)

export const menuItem = tv(
    {
        'extend': base,
        'base': 'text-text dark:text-text-dark text-sm px-2 py-0.5 text-nowrap',
        'variants': {
            'selected': {
                'true': 'bg-theme dark:bg-theme-dark text-text-dark dark:text-text-dark'
            }
        },
        'defaultVariants': {
            'display': 'flex',
            'orientation': 'horizontal',
            'width': 'full',
            'gap': 'xs',
            'justify': 'start',
            'align': 'center',
            'rounded': 'default',
            'hover': 'theme',
        }
    }
)