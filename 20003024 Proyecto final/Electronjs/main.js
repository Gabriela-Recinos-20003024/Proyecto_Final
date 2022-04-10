const { app, BrowserWindow, ipcMain } = require('electron')

// const mysql = require('mysql2')
// let nameSignUp = document.getElementById('nameSignUp');
// let usernameSignUp = document.getElementById('usernameSignUp');
// let pass = document.getElementById('passwordSignUp');
// let submitSignUp = document.getElementById('submitSignUp')
//submitSignUp.addEventListener('click', SingUp)

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./login/login.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

let productos;
function ventanaProductos() { 
    productos = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    productos.loadFile('productos/producto.html')
 }

 ipcMain.on('login_valido', (event, args) => {
    ventanaProductos()
    productos.webContents.on('did-finish-load', () => {
       productos.webContents.send('username', args)
    })
})

