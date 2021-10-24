import React from 'react'
import ReactDom from 'react-dom'
import AppContent from './components/AppContent'
import AppStatus from './components/AppStatus'
import AppTitle from './components/AppTitle'
import './styles/app.scss'
import { getClassName } from './utils'

const App = () => (
    <div className={getClassName('app')}>
        <AppTitle />
        <AppContent />
        <AppStatus />
    </div>
)

ReactDom.render(<App />, document.getElementById('app'))
