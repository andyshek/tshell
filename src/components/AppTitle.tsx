import React from 'react'
import Button from './common/Button'
import Text from './common/Text'
import iconClose from '../assets/icons/close.svg'
import iconMaximize from '../assets/icons/maximize.svg'
import iconMinimize from '../assets/icons/minimize.svg'
import { getClassName } from '../utils'
import { ipcRenderer } from 'electron'

function onMinimizeClick() {
    console.log('minimize')
    ipcRenderer.send('minimize')
}

function onMaximizeClick() {
    console.log('maximize')
    ipcRenderer.send('maximize')
}

function onClose() {
    console.log('close')
    ipcRenderer.send('close')
}

const AppTitle = () => {
    return (
        <div className={getClassName('app-title')}>
            <Text>Tshell</Text>
            <div className={getClassName('app-title-buttons')}>
                <Button icon={iconMinimize} onClick={onMinimizeClick}></Button>
                <Button icon={iconMaximize} onClick={onMaximizeClick}></Button>
                <Button icon={iconClose} onClick={onClose}></Button>
            </div>
        </div>
    )
}

export default AppTitle
