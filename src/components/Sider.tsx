import { useLocalObservable } from 'mobx-react-lite'
import React from 'react'
import { getClassName } from '../utils'
import appStore from '../store/app'

const Sider = () => {
    const app = useLocalObservable(appStore)
    return (
        <div
            className={getClassName('sider')}
            style={{
                width: app.sideWidth
            }}
        />
    )
}

export default Sider
