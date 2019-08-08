import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { AccountsService } from '../shared/account.service';
import { MethodLoggingService } from '../shared/method-logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [MethodLoggingService]
})
export class AccountComponent {

  @Input() account: AccountType;
  @Input() id: number;

  constructor(private methodLoggingService: MethodLoggingService, private accountService: AccountsService) {
  }


  onSetTo(status: string) {
    this.accountService.updateStatus({id: this.id, newStatus: status});
    this.accountService.statusUpdated.emit(status);
    this.methodLoggingService.logMethodCall();
  }

}
