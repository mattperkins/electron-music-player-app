const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow = null
app.on('ready', () => {
 mainWindow = new BrowserWindow({
  width: 612,
  height: 384
 })
 mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})
