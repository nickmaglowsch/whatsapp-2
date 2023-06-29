const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36';
  win.webContents.setUserAgent(userAgent);

  win.loadURL('https://web.whatsapp.com');

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(() => {
  app.setPath('userData', path.join(app.getPath('appData'), 'whatsapp-client'));
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
