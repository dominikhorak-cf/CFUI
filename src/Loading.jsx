import React from 'react'

export default function Loading({
    className,
    props
}) {

    return <span
        className = {`bx bx-loader animate-spin ${className}`}
        {...props}
        />
}
