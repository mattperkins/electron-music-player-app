const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow
app.on('ready', () => {
 mainWindow = new BrowserWindow({
  width: 1020,
  height: 800
 })
 // mainWindow.webContents.openDevTools()
 mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})
