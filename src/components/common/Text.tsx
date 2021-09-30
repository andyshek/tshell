import React from 'react'
import { getClassName } from '../../utils'

export interface Props {
    children: string
}

const Text = (p: Props) => {
    return <span className={getClassName('text')}>{p.children}</span>
}

export default Text
