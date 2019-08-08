import { AccountType } from './account.type';
import { InformationType } from './information.type';
import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

// @Injectable is needed because we are injecting a service (LoggingService) into another service (AccountService)
@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(newAccount: AccountType) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  updateStatus(newInformation: InformationType) {
    this.accounts[newInformation.id].status = newInformation.newStatus;
    this.loggingService.logStatusChange(newInformation.newStatus);
  }

}
