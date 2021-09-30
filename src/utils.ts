import vars from './vars'

export function getClassName(name: string) {
    return `${vars.prefix}-${name}`
}
