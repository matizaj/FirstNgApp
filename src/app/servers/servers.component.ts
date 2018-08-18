import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = 'Server was not created!';
  serverName = 'Testserver';
  serverStatus = false;
  servers = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }
  onCreatedStatus() {
    this.servers.push(this.serverName);
    this.serverStatus = true;
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
