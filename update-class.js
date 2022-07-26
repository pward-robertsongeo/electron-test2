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

    }
}

async function testUpdate() {
    let update = new Updater();
    update.checkForUpdate();
}