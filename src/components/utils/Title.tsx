import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatches, UIMatch } from 'react-router-dom'

interface Handle {
    title?: string
}

const Title = () => {

    const matches = useMatches() as Array<UIMatch<unknown, unknown> & { handle?: Handle }>
    const { t } = useTranslation()

    useEffect(
        () => {
            const lastMatch = matches.filter(match => Boolean(match.handle?.title)).at(-1)
            document.title = `${t('App.name')} - ${t(lastMatch?.handle?.title ?? '')}`
        },
        [matches, t]
    )

    return null
}

export default Title