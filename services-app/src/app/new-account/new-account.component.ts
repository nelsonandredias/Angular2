import { Component, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { AccountsService } from '../shared/account.service';
import { MethodLoggingService } from '../shared/method-logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [MethodLoggingService]
})
export class NewAccountComponent {

  constructor(private methodLoggingService: MethodLoggingService, private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({name: accountName, status: accountStatus});
    this.methodLoggingService.logMethodCall();
  }

}
