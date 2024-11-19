import PropTypes from 'prop-types'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { button } from 'components/defaultVariants'

import Icon from 'components/Icon'

export function Go({
    to,
    label,
    type = 'default',
    icon = null,
    altStyle = null,
    activeStyle = ''
}) {

    return (
        <div>
            <NavLink to = {to} className = {({isActive}) => button({display: 'flex', orientation: 'horizontal', width: 'full', rounded: 'xl', align: 'center', justify: 'start', p: 'xs', className: 'px-2', ...(isActive ? activeStyle : altStyle )})}>
                    {icon && <Icon name = {icon} className = "pl-1" />}
                    {label}
                    {type !== 'default' && <Icon name = {type === 'internal' ? 'chevron-right' : 'link-external'} />}
            </NavLink>
        </div>
    )
}

Go.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['internal', 'external', 'default']),
    icon: PropTypes.string,
    altStyle: PropTypes.oneOfType([PropTypes.object]),
    activeStyle: PropTypes.string,
}