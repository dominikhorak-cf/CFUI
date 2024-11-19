import { container, menuItem } from 'components/defaultVariants';
import Icon from 'components/Icon';
import React, { useState, createContext, useContext, useRef } from 'react';
import { Popover } from 'react-tiny-popover';

const MenuContext = createContext(null)

export function useMenuRef() {
    return useContext(MenuContext)
}

export default function Menu({
    children,
    label = 'Menu',
    icon,
    checked = false,
    orientation = 'vertical',
    className
}) {
    const parentRef = useMenuRef()
    const menuRef = useRef()
    const [isOpen, setOpen] = useState(false)

    const bodyRef = window.document.getElementById('root')

    return (
        <Popover
            ref = {menuRef}
            {...(parentRef?.current ? {parentElement: menuRef?.current} : {})}
            isOpen = {isOpen}
            positions = {orientation === 'vertical' ? ['bottom', 'top'] : ['right', 'left']}
            align = "start"
            onClickOutside = {() => setOpen(false)}
            padding = {5}
            boundaryInset = {5}
            reposition
            boundaryElement = {bodyRef}
            containerStyle = {{zIndex: 999}}
            content = {
                <div className = {container({ orientation: 'vertical', p: 'none', bg: 'full', gap: 'xs', shadow: 'normal', rounded: 'default', className: 'p-1', ...className?.menu})} >
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
