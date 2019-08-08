import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

  activeUsers = ['John', 'Cristina', 'Fidalgo'];
  inactiveUsers = ['Doe', 'Alex', 'Romero'];

  constructor( private loggingService: LoggingService, private counterService: CounterService) {
  }

  changeToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.loggingService.logChanges('inactive');
    this.counterService.incrementActiveToInactive();
  }

  changeToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.loggingService.logChanges('active');
    this.counterService.incrementInactiveToActive();
  }

}
