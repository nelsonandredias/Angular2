import { Component, OnInit } from '@angular/core';
import { ServerModel } from './server.model';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: ServerModel[];

  constructor( private serversService: ServersService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
