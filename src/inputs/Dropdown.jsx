import PropTypes from 'prop-types'
import { isEqual } from 'lodash'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Popover } from 'react-tiny-popover'

import { button, container, text } from 'components/defaultVariants'
import { useTranslation } from 'react-i18next'
import { useMenuRef } from './Menu'

const defaultItems = []
const defaultOnSelect = () => {}

function Dropdown({
    name,
    items = defaultItems,
    defaultItem,
    value = 'value',
    label = 'label',
    placeholder = 'Dropdown',
    disabled = false,
    allowSearching = false,
    selectMultiple = false,
    allowDeselecting = false,
    onSelect = defaultOnSelect,
    style,
    positions = ['bottom', 'top', 'left', 'right'],
    align = 'center',
}) {

    const { t } = useTranslation()
    const parentRef = useMenuRef()
    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState([])
    const [filter, setFilter] = useState('')

    const transformedItems = useMemo(
        () => {
            if (typeof(items) === 'object') {
                if (Array.isArray(items)) {
                    const firstItem = items?.at(0)
                    if (typeof firstItem !== 'object') {
                        const everyItemIsValid = items?.every(
                            item => typeof item === typeof firstItem
                        )
                        if (everyItemIsValid) return items?.map((item, index) => ({[value]: item, [label]: item, 'index': index}))
                    }
                }

                const everyItemIsValid = items?.every(
                    item => (Object.hasOwn(item, value) && Object.hasOwn(item, label))
                )
                if (everyItemIsValid) return items.map((item, index) => ({...item, 'index': index}))
            }
            return []
        },
        [items, label, value]
    )

    useEffect(
        () => {
            if (items) {
                const defaultSelected = items.map((item, index) => (typeof(defaultItem) === 'object' ? isEqual(item[value], defaultItem?.[value]) : item === defaultItem) ? index : null ).filter(item => item !== null)
                setSelected(defaultSelected)
                if (allowSearching) {
                    setFilter(defaultSelected.map(itemIndex => (typeof(defaultItem) === 'object') ? items[itemIndex][label] : items[itemIndex]).join(', '))
                }
            }
        },
        [defaultItem, items, onSelect, selectMultiple, value, allowSearching, setFilter, label]
    )

    const select = useCallback(
        index => {
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

                    const values = updated.map(index => items[index])
                    setFilter(
                        values.map(
                            item => (typeof(item) === 'object') ? item[label] : item
                        ).join(', ')
                    )
                    setOpen(false)
                    if (updated) onSelect(selectMultiple ? values : values.at(0) || null)

                    return updated
                }
            )
        },
        [allowDeselecting, selectMultiple, items, label, onSelect]
    )

    const itemList = useCallback(
        (popoverRect) => (
        <div className = {container({overflow: 'scroll', shadow: 'normal', bg: 'full', border: 'outline', gap: 'xs', p: 'xs', rounded: 'xl', class: 'm-1 max-w-48 max-h-48'})} style = {{width: `${popoverRect.width}px`}}>
            {
                transformedItems.filter(
                    item => String(item[label]).toLowerCase().includes(filter.toLowerCase())
                ).map(
                    item =>
                        <button
                            key = {item[value]}
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
        [transformedItems, filter, label, value, select, selected, t]
    )

    const parent = useMemo(
        () => {
            if (allowSearching) {
                return <input
                    type = "text"
                    id = {name}
                    onClick = {() => {setOpen(!isOpen); setFilter('')}}
                    disabled = {disabled || transformedItems.length === 0}
                    placeholder = {placeholder}
                    value = {filter}
                    onChange = {(e) => setFilter(e.target.value)}
                    className = {button({border: 'solid', p: 'sm', width: 'max', height: 'fit', className: 'peer truncate', ...style})}
                />
            }

            return <button
                type = "button"
                id = {name}
                className = {button({align: 'center', border: 'none', width: 'max', height: 'fit', className: 'truncate', ...style})}
                disabled = {disabled || transformedItems.length === 0}
                onClick = {() => {setOpen(!isOpen); setFilter('')}}
            >
                {selected.length > 0 ? selected.map(index => t(transformedItems?.[index]?.[label])) : t(placeholder)}
            </button>
        },
        [transformedItems, selected, allowSearching, disabled, filter, isOpen, label, name, placeholder, style, t]
    )

    return (
        <>
            <input type = "text" name = {name} disabled = {disabled || transformedItems.length === 0} value = {selected.length > 0 ? selected.map(index => transformedItems?.[index]?.[value]) : ''} readOnly placeholder = " " className = "peer hidden truncate" />
            <Popover
                isOpen = {isOpen}
                {...(parentRef?.current ? {parentElement: parentRef?.current} : {})}
                positions = {positions}
                align = {align}
                containerStyle = {{zIndex: 999}}
                onClickOutside = {() => setOpen(false)}
                content = {({parentRect}) => itemList(parentRect)}
            >
                {parent}
            </Popover>
        </>
    )
}

Dropdown.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])),
    defaultItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    allowSearching: PropTypes.bool,
    selectMultiple: PropTypes.bool,
    allowDeselecting: PropTypes.bool,
    onSelect: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object]),
    positions: PropTypes.arrayOf(PropTypes.oneOf(['left', 'right', 'top', 'bottom'])),
    align: PropTypes.oneOf(['start', 'center', 'end']),
}

export default Dropdown