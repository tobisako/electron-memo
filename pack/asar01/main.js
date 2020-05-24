'use strict';
const { app, BrowserWindow, ipcMain } = require('electron');
let win;
let wk;
// 実験：こっちでWORKER起動。

var main = async() => {
  console.log('main()');
  app.allowRendererProcessReuse = false;
  //アプリが初期化されたとき（起動されたとき）
  app.on('ready', () => { 
    createWindow();
    //const wk = new win.Worker("wk02.js");
    //const wk = new win.Worker();
  });

  ipcMain.on('synchronous-message', (event, args) => {
    console.log('ipc.on() - args=' + args);
    //event.returnValue = this.receiveMessageFromElectron(args);
  });
};

// Electron Window 作成
var createWindow = () => {
  //ウインドウの作成
  win = new BrowserWindow({
    width: 1024,
    height: 480,
    webPreferences: {
      nodeIntegration: true, //Electron6から必要
      nodeIntegrationInWorker: true
    }
  })

  //ウインドウに表示する内容
  win.loadFile('src/index.html')
  //デバッグ画面表示
  if (process.env.NODE_ENV == undefined) win.webContents.openDevTools({ mode: 'detach' });

  app.on('quit', () => {
    console.log('quit');
    //app.quit();
    //mainThread.quit();
  });

  //このウインドウが閉じられたときの処理
  win.on('closed', () => {
    console.log('closed');
    win = null;
  });
}

main();
