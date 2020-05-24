// electron の必要ライブラリをインポート
import {app, BrowserWindow} from 'electron'

// 一時変数用意
let mainWindow: Electron.BrowserWindow | null = null

app.on('ready', () => {
    
    // メインウィンドウを生成
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800,
        height: 600,
    })

    // ウィンドウが閉じたら後片付けする
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    
    // index.hrml をウィンドウに表示
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})
