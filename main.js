const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false // IMPORTANT: ne pas utiliser en production
        }
    });

    win.loadFile('index.html');

    // Méthode 1: Utiliser setMenuBarVisibility
    win.setMenuBarVisibility(false);

    // Méthode 2: Définir le menu de l'application à null
    // Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});