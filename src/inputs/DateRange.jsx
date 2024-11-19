import React, { useCallback, useMemo, useRef, useState } from 'react'

import { Popover } from 'react-tiny-popover'

import { useTranslation } from 'react-i18next'

import { ShortDateRange, ShortDateTime } from 'formats/datetime'
import { button, container, input, text } from 'components/defaultVariants'
import Icon from 'components/Icon'
import { useMenuRef } from './Menu'

const defaultOnSelect = () => {}
const defaultPositions = ['bottom', 'top', 'left', 'right']

export default function DateRange({
    name,
    defaultValue,
    min,
    max,
    placeholder,
    includeFrom = false,
    includeTo = false,
    includeTime = false,
    disabled = false,
    locale = 'en',
    style,
    onSelect = defaultOnSelect,
    positions = defaultPositions,
    align = 'center',
}) {

    const { t } = useTranslation()
    const fromRef = useRef()
    const toRef = useRef()
    const parentRef = useMenuRef()
    const [ isOpen, setOpen ] = useState(false)
    const [ from, setFrom ] = useState(Array.isArray(defaultValue) ? defaultValue?.[0] : defaultValue ?? null)
    const [ to, setTo ] = useState(Array.isArray(defaultValue) ? defaultValue?.[1] : defaultValue ?? null)

    const includeBoth = useMemo(
        () => (includeFrom && includeTo),
        [includeFrom, includeTo]
    )

    const dateFormatter = useMemo(
        () => (new Intl.DateTimeFormat(locale, includeTime ? ShortDateTime : ShortDateRange)),
        [locale, includeTime]
    )

    const select = useCallback(
        ([currentFrom, currentTo]) => {
            const newFrom = currentFrom
            const newTo = currentTo

            setFrom(newFrom)
            setTo(newTo)

            if (includeBoth) {
                onSelect([newFrom, newTo])
            } else {
                onSelect(includeFrom ? newFrom : newTo)
            }
        },
        [includeBoth, includeFrom, onSelect]
    )

    const body = useMemo(
        () => {
            if (includeBoth) {
                return (
                    <div className = {container({orientation: 'vertical', border: 'outline', rounded: 'xl', p: 'xs', gap: 'xs', bg: 'full', cursor: 'default'})}>
                        <div className = {container({orientation: 'horizontal', align: 'center', justify: 'between', gap: 'xs', p: 'sm'})}>
                            <span className = {text({textSize: 'sm'})}>
                                {t('DateRange.from')}
                            </span>
                            <div className = {container({orientation: 'horizontal', gap: 'sm', p: 'none', align: 'center'})}>
                                <input
                                    ref = {fromRef}
                                    type = {includeTime ? "datetime-local" : "date"}
                                    disabled = {disabled}
                                    defaultValue = {from}
                                    min = {(includeBoth ? (Array.isArray(min) ? min?.[0] : min) : min)}
                                    max = {(includeBoth ? (Array.isArray(max) ? max?.[0] : max) : max) || to}
                                    onChange = {e => select([e.target.value, to])}
                                    className = {input({bg: 'full', class: 'min-h-12 w-32'})}
                                />
                                <Icon name = "x" size = "sm" onClick = {() => {if (fromRef?.current?.value) {fromRef.current.value = null}; select([null, to])}} className = {`cursor-pointer ${fromRef?.current?.value ? 'text-text dark:text-text-dark' : 'text-hint dark:text-hint-dark'}`}/>
                            </div>
                        </div>
                        <div className = {container({orientation: 'horizontal', align: 'center', justify: 'between', gap: 'sm', p: 'sm'})}>
                            <span className = {text({textSize: 'sm'})}>
                                {t('DateRange.to')}
                            </span>
                            <div className = {container({orientation: 'horizontal', gap: 'sm', p: 'none', align: 'center'})}>
                                <input
                                    ref = {toRef}
                                    type = {includeTime ? "datetime-local" : "date"}
                                    disabled = {disabled}
                                    defaultValue = {to}
                                    min = {(includeBoth ? (Array.isArray(min) ? min?.[1] : min) : min) || from}
                                    max = {(includeBoth ? (Array.isArray(max) ? max?.[1] : max) : max)}
                                    onChange = {e => select([from, e.target.value])}
                                    className = {input({bg: 'full', class: 'min-h-12 w-32'})}
                                />
                                <Icon name = "x" size = "sm" onClick = {() => {if (toRef?.current?.value) {toRef.current.value = null}; select([from, null])}} className = {`cursor-pointer ${toRef?.current?.value ? 'text-text dark:text-text-dark' : 'text-hint dark:text-hint-dark'}`}/>
                            </div>
                        </div>
                    </div>
                )
            }
            return null
        },
        [disabled, includeBoth, includeTime, from, to, min, max, select, t]
    )

    const [ fromName, toName ] = useMemo(
        () => [
            (includeBoth) ? name?.[0] : name,
            (includeBoth) ? name?.[1] : name,
        ],
        [name, includeBoth]
    )

    const label = useMemo(
        () => {
            const fromDate = from ? dateFormatter.format(new Date(from)) : null
            const toDate = to ? dateFormatter.format(new Date(to)) : null
            const range = (from && to) ? dateFormatter.formatRange(new Date(from), new Date(to)) : null
            if (range) {
                return range
            }
            if (fromDate && !toDate) {
                return includeTo ? `${fromDate} ...` : fromDate
            }
            if (!fromDate && toDate) {
                return includeFrom ? `... ${toDate}` : toDate
            }
            return null
        },
        [includeFrom, includeTo, from, to, dateFormatter]
    )

    return (
        <>
            <input type = "text" readOnly defaultValue = {label} placeholder = " " className = "peer hidden"/>
            {includeFrom &&
                <input name = {fromName} type = {includeTime ? "datetime-local" : "date"} defaultValue = {from} readOnly className = "hidden"/>
            }
            {includeTo &&
                <input name = {toName} type = {includeTime ? "datetime-local" : "date"} defaultValue = {to} readOnly className = "hidden"/>
            }
            <Popover
                isOpen = {isOpen}
                parentElement = {parentRef?.current}
                boundaryElement = {window.document.getElementById('root')}
                positions = {positions}
                align = {align}
                padding = {5}
                onClickOutside = {() => setOpen(false)}
                content = {body}
            >
                <button
                    id = {name}
                    className = {button({align: 'center', border: 'none', width: 'max', height: 'fit', className: 'truncate', ...style})}
                    onClick = {() => setOpen(!isOpen)}
                >
                    {label || placeholder || t('DateRange.pick')}
                </button>
            </Popover>
        </>
    )
}
