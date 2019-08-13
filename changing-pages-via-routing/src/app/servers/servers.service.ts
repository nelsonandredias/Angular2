import { ServerModel } from './server.model';


export class ServersService {

  private servers: ServerModel[] = [
    new ServerModel(1, 'server 1', 'online'),
    new ServerModel(2, 'server 2', 'offline'),
    new ServerModel(3, 'server 3', 'online'),
    new ServerModel(4, 'server 4', 'online'),
    new ServerModel(5, 'server 5', 'offline'),
    new ServerModel(6, 'server 6', 'offline'),
    new ServerModel(7, 'server 7', 'online'),
    new ServerModel(8, 'server 8', 'offline')
    ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    console.log('entered getServer: ' + id);
    const server = this.servers.find(
      (serverToSearch) => {
        console.log(serverToSearch);
        return serverToSearch.id === id;
      }
    );
    console.log('exit getServer: ' + JSON.stringify(server));
    return server;
  }

  updateServer(id: number, serverInfo: ServerModel) {
    const server = this.getServer(id);

    //if server exist, update
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }

  }

}
