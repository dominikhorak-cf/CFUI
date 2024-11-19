import PropTypes from 'prop-types'

import React from 'react'

function Icon({ name, type = 'regular', size = 'base', className, ...props }) {

    return <span
        className = {`bx ${type === 'regular' ? 'bx' : 'bxs'}-${name.toLowerCase()} ${size ? `text-${size}` : ''} ${className}`}
        {...props}
        />
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['regular', 'solid']),
    size: PropTypes.string,
    className: PropTypes.string,
}

export default Icon