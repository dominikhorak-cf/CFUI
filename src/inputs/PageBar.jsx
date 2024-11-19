import { button, container } from 'components/defaultVariants'
import React from 'react'

const defaultClick = () => {}
export const defaultPageSize = 40

export default function PageBar({
    itemCount,
    pageSize = defaultPageSize,
    currentPage = 0,
    onClick = defaultClick,
}) {

    const pageCount = Math.ceil(itemCount / pageSize)
    const start = Math.max(currentPage - 2, 0)
    const end = Math.min(currentPage + 3, pageCount - 1)
    const buttonClass = button({type: 'important', class: ' w-8 md:w-10 text-xs md:text-sm rounded-full md:rounded-xl'})

    if (pageCount <= 1) {
        return null
    }

    const morePages = (
        <button
            disabled
            className = {buttonClass}
        >
            ...
        </button>
    )

    return <div className = {container({position: 'fixed', orientation: 'horizontal', align: 'center', justify: 'center', p: 'md', bg: 'full', rounded: 'xl', gap: 'sm', shadow: 'normal', class: ' z-10 bottom-2 left-1/2 -translate-x-1/2'})}>
        {
            [...Array(pageCount).keys()].map(
                page => 
                    ((page >= start || page === 0 ) && (page <= end || page === pageCount - 1)) ?
                    <>
                        {(page === pageCount - 1 && end < pageCount - 2) &&
                            morePages
                        }
                        <button
                            key = {`paginationMenu_${page}`}
                            onClick = {() => onClick(page)}
                            disabled = {page === currentPage}
                            className = {buttonClass}
                        >
                            {page + 1}
                        </button>
                        {(page === 0 && start > 1) &&
                            morePages
                        }
                    </> :
                    null
            )
        }
    </div>
}