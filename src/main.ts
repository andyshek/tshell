import { app, BrowserWindow, ipcMain } from 'electron'
// import path from 'path'

const isProd: boolean = process.env.NODE_ENV === 'production'

let mainWindow: BrowserWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 800,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            javascript: true
            //   preload: path.join(__dirname, 'render.bundle.js')
        }
    })
    if (isProd) mainWindow.loadURL(`file://${__dirname}/index.html`)
    else mainWindow.loadURL(`http://localhost:8080`)
    if (!isProd) mainWindow.webContents.openDevTools({ mode: 'detach' })
    return mainWindow
}

app.whenReady().then(() => {
    mainWindow = createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close', () => {
    app.exit()
})

ipcMain.on('maximize', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize()
    } else {
        mainWindow.maximize()
    }
})

ipcMain.on('minimize', () => {
    mainWindow.minimize()
})
