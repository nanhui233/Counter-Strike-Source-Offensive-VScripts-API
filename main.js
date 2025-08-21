const { app, BrowserWindow } = require('electron');
function createWindow () {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        // 不要加 frame: false
        webPreferences: { nodeIntegration: true }
    });
    win.loadFile('src/index.html');
    // 隐藏调试工具栏
    win.removeMenu(); // 可选，隐藏菜单栏
}
app.whenReady().then(createWindow);