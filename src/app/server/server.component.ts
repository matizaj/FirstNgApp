import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: ['.online { color: white}']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    servers = ['Testserver', 'Testserver 2'];
    serverName = 'Testserver';

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'orange';
    }

    onCreateServer() {
        this.servers.push(this.serverName);
    }
}
