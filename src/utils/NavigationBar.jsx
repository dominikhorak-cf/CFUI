import React from 'react'
import { Link } from 'react-router-dom'

import { container, base, text } from 'components/defaultVariants'

import Personal from './Personal'
import Title from './Title'

function NavigationBar() {

    return (
        <div className = {container({orientation: 'horizontal', width: 'full', height: 'fit', position: 'sticky', bg: 'full', align: 'center', justify: 'between', p: 'sm', class: 'z-[998] top-0 rounded-t-0'})}>
            <div className = {base({display: 'flex', orientation: 'horizontal', align: 'center', p: 'none', gap: 'none', class: 'divide-x-2'})}>
                <span className = {text({weight: 'bold', textSize: 'xl', class: 'text-theme px-2'})}>
                    CloudForce
                </span>
                <span className = {text({weight: 'semibold', class: 'px-2'})}>
                    <Link to = "/">HelpDesk</Link>
                </span>
            </div>
            <Personal/>
            <Title/>
        </div>
    )
}

export default NavigationBar