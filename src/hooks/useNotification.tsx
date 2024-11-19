import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { flushSync } from 'react-dom'

export type NotificationRoles = 'Success' | 'Warning' | 'Failure' | 'Info'

export interface Notification {
    id: number,
    role: NotificationRoles
    message?: string,
    icon?: string,

}

interface NotificationsContextType {
    notifications: Notification[],
    notify: Function,
    close: Function
}

const NotificationsContext = createContext<NotificationsContextType | null>(null)

export const useNotification = () => {
    return useContext(NotificationsContext)
}

export const NotificationProvider = ({ children }: {children: ReactNode}) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const close = useCallback(
        (id: number) => {
            if (document.startViewTransition) {
                document.startViewTransition(
                    () => flushSync(
                        () => {setNotifications(prev => prev.filter(notification => notification.id !== id))}
                    )
                )
            } else {
                setNotifications(prev => prev.filter(notification => notification.id !== id))
            }
        },
        []
    )

    const notify = useCallback(
        (message: string, role: NotificationRoles = 'Info', icon: string, timeout: number = 6000) => {
            const id = Date.now()
            if (document.startViewTransition) {
                document.startViewTransition(
                    () => flushSync(
                        () => setNotifications(prev => [...prev, { id, message, role, icon, beingDestroyed: false }])
                    )
                )
            } else {
                setNotifications(prev => [...prev, { id, message, role, icon, beingDestroyed: false }])
            }

            if (timeout > 0) {
                setTimeout(
                    () => close(id),
                    timeout
                )
            }
        },
        [close]
    )

    return (
        <NotificationsContext.Provider value={{ notifications, notify, close }}>
            {children}
        </NotificationsContext.Provider>
    )
}
