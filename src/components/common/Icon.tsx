import React from 'react'
import { getClassName } from '../../utils'
export interface Props {
    name: string
    width?: number
    height?: number
}

const Icon = (p: Props) => {
    return (
        <i
            className={getClassName('icon')}
            style={{
                backgroundImage: `url(${p.name})`
            }}
        ></i>
    )
}

export default Icon
