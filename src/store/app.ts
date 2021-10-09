export default () => ({
    title: 'tshell',
    sideWidth: 200,

    setAppTitle(title: string) {
        this.title = title
    },

    setSideWidth(width: number) {
        this.sideWidth = width
    }
})
