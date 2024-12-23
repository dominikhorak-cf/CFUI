import React, { useCallback, useEffect, useRef, HTMLProps } from 'react'
import { useTranslation } from 'react-i18next'

import { base, button, input, label } from 'components/defaultVariants'
import Dropdown from 'components/inputs/dropdown/Dropdown'
import Icon from 'components/icon/Icon'
import DateRange from '../daterange/DateRange'
import { CardProps } from './Card.types'

export default function Card({
    name,
    type,
    role = 'input',
    className,
    required = false,
    disabled = false,
    placeholder = '',
    values,
    defaultValue,
    icon,
    ...props
}: CardProps) {
    const { t } = useTranslation()
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const resize = useCallback(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [])

    useEffect(() => {
        if (role === 'textarea') resize()
    }, [resize, role])

    const renderInput = () => (
        <input
            id={name}
            name={name}
            type={type}
            required={required}
            disabled={disabled}
            defaultValue={defaultValue}
            placeholder=" "
            {...props}
            className={input({
                position: 'absolute',
                size: 'full',
                border: 'outline',
                hover: 'group',
                textSize: 'default',
                bg: 'full',
                className: `peer pt-6 md:pt-7 pb-2 ${icon ? 'pl-9' : 'pl-4'} pr-8 ${className?.card}`,
            })}
        />
    )

    const renderTextarea = () => (
        <textarea
            id={name}
            ref={textareaRef}
            name={name}
            required={required}
            disabled={disabled}
            defaultValue={defaultValue}
            placeholder=" "
            onChange={resize}
            {...props}
            className={input({
                position: 'static',
                width: 'full',
                border: 'outline',
                hover: 'group',
                textSize: 'default',
                bg: 'full',
                className: `peer pt-6 md:pt-7 pb-2 ${icon ? 'pl-9' : 'pl-4'} pr-8 resize-y h-12 md:h-16 min-h-12 md:min-h-16 ${className?.card}`,
            })}
        />
    )

    const renderDropdown = () => (
        <Dropdown
            name={name}
            disabled={disabled}
            placeholder=" "
            values={values}
            defaultValue={defaultValue}
            {...props}
            className={
                button({
                    position: 'absolute',
                    justify: 'start',
                    size: 'full',
                    border: 'outline',
                    hover: 'group',
                    textSize: 'default',
                    textAlign: 'start',
                    bg: 'full',
                    className: `pt-6 md:pt-7 pb-2 ${icon ? 'pl-9' : 'pl-4'} pr-8 ${className?.card}`,
                })
            }
        />
    )

    const renderDateRange = () => (
        <DateRange
            name={name}
            disabled={disabled}
            placeholder=" "
            defaultValue={String(defaultValue)}
            {...props}
            className={
                button({
                    position: 'absolute',
                    justify: 'start',
                    size: 'full',
                    border: 'outline',
                    hover: 'group',
                    textSize: 'default',
                    textAlign: 'start',
                    bg: 'full',
                    class: `pt-6 md:pt-7 pb-2 ${icon ? 'pl-9' : 'pl-4'} pr-8 ${className?.card}`,
                })
            }
        />
    )

    const renderIcon = () => (
        icon && (
            <Icon
                name={icon}
                size="sm"
                className={base({
                    position: 'absolute',
                    class: 'peer-focus:pt-[1.375rem] peer-no-placeholder:pt-[1.375rem] md:peer-focus:pt-8 md:peer-no-placeholder:pt-8 pt-5 md:pt-6 pb-2 pl-4 transition-all duration-300',
                })}
            />
        )
    )

    return (
        <label
            htmlFor={name}
            className={base({
                display: 'block',
                position: 'relative',
                bg: 'full',
                rounded: 'xl',
                class: `group w-40 ${
                    role === 'textarea' ? 'min-h-12 md:min-h-16 h-auto' : 'h-12 md:h-16'
                } ${className}`,
            })}
        >
            {role === 'input' && renderInput()}
            {role === 'textarea' && renderTextarea()}
            {role === 'dropdown' && renderDropdown()}
            {role === 'daterange' && renderDateRange()}

            <span
                className={label({
                    position: 'absolute',
                    role: 'hint',
                    class: `text-base ${
                        role === 'input' ? 'cursor-text' : 'cursor-pointer'
                    } peer-disabled:cursor-default peer-focus:top-3 md:peer-focus:top-4 peer-focus:left-4 peer-focus:text-xs peer-no-placeholder:top-3 md:peer-no-placeholder:top-4 peer-no-placeholder:left-4 peer-no-placeholder:text-xs top-1/2 -translate-y-1/2 ${
                        icon ? 'left-9' : 'left-4'
                    } transition-all`,
                })}
            >
                {`${placeholder}${required ? ` (${t('App.required')})` : ''}`}
            </span>

            {(role === 'dropdown' || role === 'daterange') && (
                <Icon
                    name="chevron-down"
                    className="group-focus-within:-rotate-180 cursor-pointer absolute text-hint top-1/2 -translate-y-1/2 right-3 transition-all duration-300"
                />
            )}
            {renderIcon()}
        </label>
    )
}
