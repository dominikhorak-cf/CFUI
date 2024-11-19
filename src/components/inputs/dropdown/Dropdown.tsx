import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Popover, Rect } from 'react-tiny-popover'

import { button, container, text } from 'components/defaultVariants'
import { useTranslation } from 'react-i18next'
import { useMenuRef } from 'components/inputs/menu/Menu'
import { DropdownProps } from './Dropdown.types'

const defaultOnSelect = () => {}

export default function Dropdown<T>({
    name,
    values,
    defaultValue,
    output = 'value',
    label = 'label',
    placeholder = 'Dropdown',
    disabled = false,
    allowSearching = false,
    selectMultiple = false,
    allowDeselecting = false,
    onSelect = defaultOnSelect,
    className,
    positions = ['bottom', 'top', 'left', 'right'],
    align = 'center',
}: DropdownProps<T>) {

    const { t } = useTranslation()
    const parentRef = useMenuRef()
    const [isOpen, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<number[]>([])
    const [filter, setFilter] = useState<string>('')

    type transformedValue = Record<string, any>

    const transformedValues: transformedValue[] = useMemo(
        () => {
            if (typeof(values) === 'object') {
                if (Array.isArray(values)) {
                    const firstItem = values?.at(0)
                    if (typeof firstItem !== 'object') {
                        return values.map((item, index) => ({[output]: item, [label]: item, 'index': index}))
                    }
                }

                return values.map((item, index) => ({...item, 'index': index}))
            }
            return []
        },
        [values, label, output]
    )

    const transformedDefaultValue = useMemo(
        () => {
            if (typeof(defaultValue) !== 'object') {
                return {
                    [output]: defaultValue,
                    [label]: defaultValue,
                }
            }
        },
        [defaultValue]
    )

    useEffect(
        () => {
            if (values) {
                const defaultSelected = transformedValues.map((item, index) => (transformedDefaultValue?[output] : null) === item ? index : null ).filter(item => item !== null)
                setSelected(defaultSelected)
                if (allowSearching) {
                    setFilter(defaultSelected.map(itemIndex => transformedValues[itemIndex][label]).join(', '))
                }
            }
        },
        [defaultValue, values, onSelect, selectMultiple, output, allowSearching, setFilter, label]
    )

    const select = useCallback(
        (index: number) => {
            setSelected(
                previous => {
                    let updated = previous
                    const isSelected = previous.includes(index)

                    if (isSelected) {
                        if (allowDeselecting) {
                            updated = previous.filter(item => item !== index)
                        }
                    } else {
                        updated = [...(selectMultiple ? updated : []), index]
                    }

                    const valuesOfUpdated = updated.map(index => transformedValues[index])
                    setFilter(
                        valuesOfUpdated.map(
                            item => (typeof(item) === 'object') ? item[label] : item
                        ).join(', ')
                    )
                    setOpen(false)
                    if (updated) onSelect(selectMultiple ? valuesOfUpdated : valuesOfUpdated.at(0) || null)

                    return updated
                }
            )
        },
        [allowDeselecting, selectMultiple, values, label, onSelect]
    )

    const itemList = useCallback(
        (popoverRect: Rect) => (
        <div className = {container({overflow: 'scroll', shadow: 'normal', bg: 'full', border: 'outline', gap: 'xs', p: 'xs', rounded: 'xl', class: 'm-1 max-w-48 max-h-48'})} style = {{width: `${popoverRect.width}px`}}>
            {
                transformedValues.filter(
                    item => String(item[label]).toLowerCase().includes(filter.toLowerCase())
                ).map(
                    item =>
                        <button
                            key = {item[output]}
                            type = "button"
                            onClick = {() => select(item.index)}
                            className = {button({type: selected.includes(item.index) ? 'important' : 'default', width: 'full', height: 'fit', p: 'xs', class: 'px-2'})}
                        >
                            <span className = {text({width: 'full', height: 'fit', textSize: 'sm', textAlign: 'start', p: 'xs'})} >
                                {t(item[label])}
                            </span>
                        </button>
                )
            }
        </div>
        ),
        [transformedValues, filter, label, output, select, selected, t]
    )

    const parent = useMemo(
        () => {
            if (allowSearching) {
                return <input
                    type = "text"
                    id = {name}
                    onClick = {() => {setOpen(!isOpen); setFilter('')}}
                    disabled = {disabled || transformedValues.length === 0}
                    placeholder = {placeholder}
                    value = {filter}
                    onChange = {(e) => setFilter(e.target.value)}
                    className = {button({border: 'solid', p: 'sm', width: 'max', height: 'fit', className: 'peer truncate', ...className?.button})}
                />
            }

            return <button
                type = "button"
                id = {name}
                className = {button({align: 'center', border: 'none', width: 'max', height: 'fit', className: 'truncate', ...className?.button})}
                disabled = {disabled || transformedValues.length === 0}
                onClick = {() => {setOpen(!isOpen); setFilter('')}}
            >
                {selected.length > 0 ? selected.map(index => t(transformedValues?.[index]?.[label])) : t(placeholder)}
            </button>
        },
        [transformedValues, selected, allowSearching, disabled, filter, isOpen, label, name, placeholder, className, t]
    )

    return (
        <>
            <input type = "text" name = {name} disabled = {disabled || transformedValues.length === 0} value = {selected.length > 0 ? selected.map(index => transformedValues[index][output]) : ''} readOnly placeholder = " " className = "peer hidden truncate" />
            <Popover
                isOpen = {isOpen}
                {...(parentRef?.current ? {parentElement: parentRef?.current} : {})}
                positions = {positions}
                align = {align}
                containerStyle = {{zIndex: '999'}}
                onClickOutside = {() => setOpen(false)}
                content = {({parentRect}) => itemList(parentRect)}
            >
                {parent}
            </Popover>
        </>
    )
}