import React from 'react'
import { getClassName } from '../utils'
import Sider from './Sider'
import Workspace from './Workspace'

const AppContent = () => {
    return (
        <div className={getClassName('app-content')}>
            <Sider />
            <Workspace />
        </div>
    )
}

export default AppContent
