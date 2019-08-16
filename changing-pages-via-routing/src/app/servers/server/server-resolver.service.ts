import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServerModel } from '../server.model';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ServerResolverService implements Resolve<ServerModel> {

  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerModel> | Promise<ServerModel> | ServerModel {

      return this.serversService.getServer(+route.params['id']);

  }
}
