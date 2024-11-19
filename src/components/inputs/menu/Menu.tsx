import { container, menuItem } from 'components/defaultVariants'
import Icon from 'components/icon/Icon'
import React, { useState, createContext, useContext, useRef, Context } from 'react'
import { Popover } from 'react-tiny-popover'
import { MenuProps } from './Menu.types'

interface MenuContextType {
    current?: HTMLElement | null;
}

const MenuContext = createContext<MenuContextType | null>(null)

export function useMenuRef(): MenuContextType | null  {
    return useContext(MenuContext)
}

export default function Menu({
    children,
    label = 'Menu',
    icon,
    checked = false,
    orientation = 'vertical',
    className
}: MenuProps) {
    const parentRef = useMenuRef()
    const menuRef = useRef<HTMLElement | null>(null)
    const [isOpen, setOpen] = useState<boolean>(false)

    const bodyRef = window.document.getElementById('root') ?? undefined

    return (
        <Popover
            ref = {menuRef}
            parentElement = {parentRef?.current ? menuRef?.current ?? undefined : undefined}
            isOpen = {isOpen}
            positions = {orientation === 'vertical' ? ['bottom', 'top'] : ['right', 'left']}
            align = "start"
            onClickOutside = {() => setOpen(false)}
            padding = {5}
            boundaryInset = {5}
            reposition
            boundaryElement = {bodyRef}
            containerStyle = {{zIndex: '999'}}
            content = {
                <div className = {container({ orientation: 'vertical', p: 'none', bg: 'full', gap: 'xs', shadow: 'normal', rounded: 'default', className: `p-1 ${className?.menu}` })} >
                    <MenuContext.Provider value = {menuRef}>
                        {children}
                    </MenuContext.Provider>
                </div>
            }
        >
            <button
                onClick = {() => setOpen(prev => !prev)}
                className = {menuItem({class: className?.button})}
            >
                {icon && <Icon name = {icon} />}
                {parentRef && <Icon name = "chevron-right"/>}
                <span className = {className?.label}>
                    {label}
                </span>
                {parentRef && 
                    <Icon name = "check" className = {`ml-auto ${checked ? 'visible' : 'invisible'}`}/>
                }
            </button>
        </Popover>
    )
}
