import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { InformationType } from '../shared/information.type';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {

  @Input() account: AccountType;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<InformationType>();

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {
  }


  onSetTo(status: string) {
    this.accountService.updateStatus({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }

}
