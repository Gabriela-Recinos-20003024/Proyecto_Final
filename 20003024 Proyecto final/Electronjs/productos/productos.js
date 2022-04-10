const { ipcRenderer } = require("electron");


ipcRenderer.on('username', (event, args) => {
    document.getElementById('name').innerHTML = args[0]
})

