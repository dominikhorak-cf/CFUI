import PropTypes from 'prop-types'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { button } from 'components/defaultVariants'

import Icon from 'components/icon/Icon'
import { GoProps } from './Go.types'

export default function Go({
    to,
    label,
    type = 'default',
    icon,
    className
}: GoProps) {

    return (
        <div>
            <NavLink to = {to} className = {({isActive}) => button({display: 'flex', orientation: 'horizontal', width: 'full', rounded: 'xl', align: 'center', justify: 'start', p: 'xs', className: 'px-2', ...className?.default ,...(isActive ? className?.active : className?.inactive )})}>
                    {icon && <Icon name = {icon} className = "pl-1" />}
                    {label}
                    {type !== 'default' && <Icon name = {type === 'internal' ? 'chevron-right' : 'link-external'} />}
            </NavLink>
        </div>
    )
}
