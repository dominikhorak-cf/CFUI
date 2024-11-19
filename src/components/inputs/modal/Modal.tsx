import PropTypes from 'prop-types'

import React, { useEffect, useRef } from 'react'
import { button, container, label } from 'components/defaultVariants'

import { useTranslation } from 'react-i18next'
import { ModalProps } from './Modal.types'

const defaultOnClose = () => {}

export default function Modal ({
    children,
    isOpen = false,
    message,
    heading,
    exitType = 'cancel',
    onClose = defaultOnClose
}: ModalProps) {

    const { t } = useTranslation()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(
        () => {
            if (modalRef.current) {
                if (isOpen) {
                    modalRef.current?.showModal()
                } else {
                    modalRef.current?.close()
                    onClose()
                }
            }
        },
        [isOpen, modalRef, onClose]
    )

    return (
        <dialog ref = {modalRef} onClose = {() => {onClose(); modalRef.current?.close()}} className = {container({display: isOpen ? 'flex' : 'none', orientation: 'vertical', rounded: 'xl', p: 'lg', bg: 'full', class: 'md:max-w-[65%] backdrop:bg-black/50'})}>
            {heading &&
                <span className = {label({role: 'subtitle'})}>
                    {heading}
                </span>
            }
            {message}
            <div className = {container({orientation: 'horizontal', justify: 'end', p: 'none'})}>
                {children}
                <button
                    type = "button"
                    onClick = {() => modalRef.current?.close()}
                    className = {button()}
                >
                    {t((exitType === 'cancel') ? 'App.cancel' : 'App.close')}
                </button>
            </div>
        </dialog>
    )
}
