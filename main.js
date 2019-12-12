 const electron = require('electron');
const { app, BrowserWindow, Menu } = electron
const shell = require('electron').shell;

function createWindow () {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  // Cria uma janela de navegação.

  // Desabilida o menu padrão
  Menu.setApplicationMenu(null)
  let win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Titulo da janela
  win.setTitle("Rackspace")

  win.setBackgroundColor("#DDD")

  // Abrir maximizado
  win.maximize()

  //win.loadURL('https://apps.rackspace.com/index.php')

  win.webContents.on('open-in-browser', (event, url) => {
    
    if (url.includes('https://apps.rackspace.com/')){
      console.log('FOI')
    }
    else{
      event.preventDefault()
      shell.openExternal(url)
    }
  });

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

app.on('ready', createWindow)