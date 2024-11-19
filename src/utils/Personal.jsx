import React, { useState, useMemo, useCallback } from 'react'
import { Go } from 'components/Go'
import { Popover } from 'react-tiny-popover'

import { base, container, label, text } from 'components/defaultVariants'
import { useAuth } from 'hooks/useAuth'
import Card from 'components/inputs/Card'
import { useTranslation } from 'react-i18next'

const languages = [
    {label: 'Čeština', language: 'cs'},
    {label: 'English', language: 'en'},
    {label: 'Español', language: 'es'},
]

function Personal() {

    const { t, i18n } = useTranslation()
    const [ isOpen, setOpen ] = useState(false)
    const { user, locale, setLocale } = useAuth()

    const currentLanguage = useMemo(
        () => languages.find(lang => lang.language === locale?.language),
        [locale]
    )

    const setLanguage = useCallback(
        newLocale => {
            const updatedLocale = new Intl.Locale(locale.toString(), {language: newLocale.language})
            window.localStorage.setItem('App.Locale', updatedLocale.toString())
            i18n.changeLanguage(updatedLocale.language)
            setLocale(updatedLocale)
        },
        [locale, setLocale, i18n]
    )

    return (
        <Popover
            isOpen = {isOpen}
            positions = {['bottom']}
            onClickOutside={() => setOpen(false)}
            align = {"end"}
            containerStyle = {{zIndex: 999}}
            content = {
                <div className = {container({orientation: 'vertical', gap: 'sm', rounded: 'xl', shadow: 'normal', bg: 'full', class: 'mt-4 mr-2 *:w-full'})}>
                    <div className = {base()}>
                        <div className = {label({role: 'title', p: 'sm', class: 'pb-0'})}>{user?.displayName}</div>
                        <div className = {label({role: 'hint', p: 'sm', class: 'pt-1'})} >{user?.email}</div>
                    </div>
                    <Card
                        role = "dropdown"
                        name = "language"
                        icon = "globe"
                        placeholder = {t('App.language')}
                        items = {languages}
                        defaultItem = {currentLanguage}
                        value = "language"
                        onSelect = {setLanguage}
                        className = {'*:transition-none'}
                    />
                    <Go to = "/logout" label = {t('App.logout')} icon = "x-circle" altStyle = {{className: "text-red-500"}}/>
                </div>
            }
        >
            <button
                type = "button"
                className = "justify-self-end h-full px-1"
                onClick = {() => setOpen(!isOpen)}
            >
                <div
                    className = {text({display: 'flex', size: 'sm', rounded: 'full', textSize: 'xs', weight: 'bold', justify: 'center', align: 'center', class: 'bg-blue-600 text-text-dark' })}
                >
                    {`${user?.givenName?.[0] || ''}${user?.surname?.[0] || ''}`}
                </div>
            </button>
        </Popover>
    )
}

export default Personal