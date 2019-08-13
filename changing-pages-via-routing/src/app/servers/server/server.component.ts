import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../server.model';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: ServerModel;

  constructor(private serversService: ServersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // use snapshot for the first initialization
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // for the subsequent changes, use observables
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}
