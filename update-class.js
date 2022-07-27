class Updater {
    ipc = null;

    constructor() {
   
        this.ipc = require('electron').ipcRenderer;

        
    }

    async checkForUpdate() {
        if(this.ipc == null) return;
        let response = await this.ipc.invoke('check-for-updates');
        console.log(response)
    }

    async downloadUpdate() {
        if(this.ipc == null) return;
        let response = await this.ipc.invoke('download-update');
        await this.ipc.invoke('restart-app');
    }
}

async function testUpdate() {
    let update = new Updater();
    await update.checkForUpdate();
    await update.downloadUpdate();
}