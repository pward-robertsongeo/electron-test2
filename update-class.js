class Updater {
    ipc = null;

    constructor() {
   
        this.ipc = require('electron').ipcRenderer;

        
    }

    checkForUpdate() {
        if(this.ipc == null) return;
        let response = this.ipc.sendSync('check-for-updates', "hello");
        console.log(response)
    }

    downloadUpdate() {
        if(this.ipc == null) return;
        let response = this.ipc.sendSync('download-update', "hello");
        console.log(response)
    }
}

async function testUpdate() {
    let update = new Updater();
    update.checkForUpdate();
    update.downloadUpdate();
}