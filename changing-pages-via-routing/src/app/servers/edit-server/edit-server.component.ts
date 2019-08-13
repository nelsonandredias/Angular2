import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerModel } from '../server.model';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivated-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: ServerModel;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changedSaved = false;


  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {

    console.log(this.route.queryParams.subscribe());
    console.log(this.route.fragment.subscribe());

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    // subscribe route params to update the id if params change
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(
      this.server.id, {id: this.server.id, name: this.serverName, status: this.serverStatus}
    );

    //after changes saved, move up to the previous route
    this.changedSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    if(!this.allowEdit) {
      return true;
    }

    if( (this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changedSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }

  }

}
