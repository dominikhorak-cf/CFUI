import React from 'react'
import { LoadingProps } from './Loading.types'

export default function Loading({ className }: LoadingProps) {

    return <span
        className = {`bx bx-loader animate-spin ${className}`}
    />
}
