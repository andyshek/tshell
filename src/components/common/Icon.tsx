import React from 'react'
import { getClassName } from '../../utils'

export interface Props {
    src: string
    width?: number
    height?: number
}

const Icon = (p: Props) => {
    return (
        <i
            className={getClassName('icon')}
            style={{
                backgroundImage: `url(${p.src})`
            }}
        />
    )
}

export default Icon
