import React from 'react'
import Icon from './Icon'
import Text from './Text'
import { getClassName } from '../../utils'

export interface Props {
    children?: string
    icon?: string
    width?: number
    height?: number
    onClick?: () => void
}

const Button = (p: Props) => {
    return (
        <button
            type="button"
            className={getClassName('button')}
            onClick={() => {
                if (p.onClick) p.onClick()
            }}
        >
            {p.icon === undefined ? null : (
                <Icon
                    {...{
                        src: p.icon
                    }}
                />
            )}
            {p.children === undefined ? null : <Text>{p.children}</Text>}
        </button>
    )
}

export default Button
