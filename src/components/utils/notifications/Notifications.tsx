import React from 'react'

import { NotificationsContextType, useNotification, NotificationRoles, NotificationRoleMapping } from 'hooks/useNotification'
import { base, button, container } from 'components/defaultVariants'
import Icon from 'components/icon/Icon'

const notificationConfig: NotificationRoleMapping = {
    Info: { buttonRole: 'default' },
    Success: { buttonRole: 'success', icon: 'check' },
    Warning: { buttonRole: 'warning', icon: 'error' },
    Failure: { buttonRole: 'destructive', icon: 'x' },
}

export default function Notifications() {

    const { notifications, close } = useNotification() ?? {}

    return (
        <div className = {container({orientation: 'vertical', position: 'absolute', width: 'full', overflow: 'scroll', gap: 'md', p: 'sm', class: 'top-12 right-0 pr-3 z-[999] sm:w-96 sm:max-h-96'})}>
            {notifications &&
                notifications.map(
                    notification => (
                        <div
                            key = {notification.id}
                            className = {button({orientation: 'horizontal', width: 'full', type: 'important', role: notificationConfig[notification.role || 'Info'].buttonRole, gap: 'xs', p: 'sm', rounded: 'xl', align: 'center', justify: 'between', class: 'pr-1'})}
                        >
                            <div className = {base({display: 'flex', orientation: 'horizontal', align: 'center', gap: 'sm'})}>
                                {(notification.icon || notificationConfig[notification.role]?.icon) &&
                                    <Icon name = {(notification.icon || notificationConfig[notification.role].icon)!} />
                                }
                                <div>
                                    {notification.message}
                                </div>
                            </div>
                            <Icon name = "x" onClick = {() => close!(notification.id)} className = "cursor-pointer p-2" />
                        </div>
                    )
                )
            }
        </div>
    )
}
