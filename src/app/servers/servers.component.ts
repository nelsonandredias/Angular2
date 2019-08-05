import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Type Name';
  serverCreated = false;

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      }
      , 5000);
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }


}
