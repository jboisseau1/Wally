const { app, BrowserWindow } = require('electron');
var path = require('path');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    title: 'Wally',
    width: 450,
    height: 300,
    resizable: false,
    transparent: true,
    vibrancy: 'medium-light',
    titleBarStyle: 'hidden',
    fullscreenable: false,
    icon: path.join(
      __dirname,
      '/src/assets/Screen Shot 2018-10-05 at 7.31.09 PM.png.icns'
    )
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

app.on('window-all-closed', () => {
  app.quit();
});
