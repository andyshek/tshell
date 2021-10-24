import React from 'react'
import { getClassName } from '../utils'
import Icon from './common/Icon'
import logoIcon from '../assets/icons/logo.svg'

const Logo = () => {
    return (
        <div className={getClassName('logo')}>
            <Icon src={logoIcon} />
        </div>
    )
}
export default Logo
