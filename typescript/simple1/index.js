"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// electron の必要ライブラリをインポート
var electron_1 = require("electron");
// 一時変数用意
var mainWindow = null;
electron_1.app.on('ready', function () {
    // メインウィンドウを生成
    mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800,
        height: 600,
    });
    // ウィンドウが閉じたら後片付けする
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    // index.hrml をウィンドウに表示
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
