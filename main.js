const electron = require('electron');
const { app, BrowserWindow, Menu } = electron
const shell = require('electron').shell;
const path = require('path');
const nativeImage = electron.nativeImage;

// Importa o Icone que será usado no APP (Janela)
const Icon = nativeImage.createFromPath(path.join(__dirname, 'logo-win.png'))

function createWindow () {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  // Cria uma janela de navegação.

  // Desabilida o menu padrão
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    width,
    height,
    icon: Icon,
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