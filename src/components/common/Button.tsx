import React from 'react'
import Icon from './Icon'
import Text from './Text'
import { getClassName } from '../../utils'

export interface Props {
    children?: string
    icon?: string
    width?: number
    height?: number
    onClick?: Function
}

const Button = (p: Props) => {
    return (
        <button
            className={getClassName('button')}
            onClick={() => {
                console.log('click')
                if (p.onClick) p.onClick()
            }}
        >
            {p.icon === undefined ? null : (
                <Icon
                    {...{
                        src: p.icon
                    }}
                ></Icon>
            )}
            {p.children === undefined ? null : <Text>{p.children}</Text>}
        </button>
    )
}

export default Button
