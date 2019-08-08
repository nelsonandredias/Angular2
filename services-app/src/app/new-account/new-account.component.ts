import { Component, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  @Output() accountAdded = new EventEmitter<AccountType>();


  constructor(private loggingService: LoggingService, private accountService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({name: accountName, status: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }

}
