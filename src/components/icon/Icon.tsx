import React from 'react'
import { IconProps } from './Icon.types'

function Icon({ name, type = 'regular', size = 'base', className, ...props }: IconProps) {

    return <span
        className = {`bx ${type === 'regular' ? 'bx' : 'bxs'}-${name.toLowerCase()} ${size ? `text-${size}` : ''} ${className}`}
        {...props}
        />
}

export default Icon