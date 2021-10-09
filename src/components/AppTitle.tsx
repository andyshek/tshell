import React from 'react'
import Button from './common/Button'
import Text from './common/Text'
import iconClose from '../assets/icons/close.svg'
import iconMaximize from '../assets/icons/maximize.svg'
import iconMinimize from '../assets/icons/minimize.svg'
import { getClassName } from '../utils'
import { ipcRenderer } from 'electron'
import Logo from './Logo'
import { Observer, useLocalObservable } from 'mobx-react-lite'
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
            <Logo></Logo>
            <Observer>
                { () => (<Text>{ app.title }</Text>) }
            </Observer>
            <div className={getClassName('app-title-buttons')}>
                <Button icon={iconMinimize} onClick={onMinimizeClick}></Button>
                <Button icon={iconMaximize} onClick={onMaximizeClick}></Button>
                <Button icon={iconClose} onClick={onClose}></Button>
            </div>
        </div>
    )
}

export default AppTitle
