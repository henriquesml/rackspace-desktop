 const electron = require('electron');
const { app, BrowserWindow, Menu } = electron
const shell = require('electron').shell;

function createWindow () {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  // Cria uma janela de navegação.

  // Desabilida o menu padrão
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Titulo da janela
  mainWindow.setTitle("Rackspace")

  mainWindow.setBackgroundColor("#DDD")

  // Abrir maximizado
  mainWindow.maximize()

  mainWindow.loadFile('index.html')
  //win.loadURL('https://apps.rackspace.com/index.php')

  mainWindow.webContents.on('new-window', (event, url) => {
    
    if (url.includes('https://apps.rackspace.com/')){
    }
    else{
      event.preventDefault()
      shell.openExternal(url)
    }
  });
}

app.on('ready', createWindow)