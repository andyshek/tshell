import React from 'react'
import ReactDom from 'react-dom'
import MainRouter from './MainRouter'
import './styles/app.scss'

const App = () => <MainRouter />

ReactDom.render(<App />, document.getElementById('app'))
