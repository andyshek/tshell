import React from 'react'
import { ipcRenderer } from 'electron'
import { Observer, useLocalObservable } from 'mobx-react-lite'
import Button from './common/Button'
import Text from './common/Text'
import iconClose from '../assets/icons/close.svg'
import iconMaximize from '../assets/icons/maximize.svg'
import iconMinimize from '../assets/icons/minimize.svg'
import { getClassName } from '../utils'
import Logo from './Logo'
import appStore from '../store/app'

function onMinimizeClick() {
    ipcRenderer.send('minimize')
}

function onMaximizeClick() {
    ipcRenderer.send('maximize')
}

function onClose() {
    ipcRenderer.send('close')
}

const AppTitle = () => {
    const app = useLocalObservable(appStore)
    return (
        <div className={getClassName('app-title')}>
            <Logo />
            <Observer>{() => <Text>{app.title}</Text>}</Observer>
            <div className={getClassName('app-title-buttons')}>
                <Button icon={iconMinimize} onClick={onMinimizeClick} />
                <Button icon={iconMaximize} onClick={onMaximizeClick} />
                <Button icon={iconClose} onClick={onClose} />
            </div>
        </div>
    )
}

export default AppTitle
