import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<AccountType>();


  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({name: accountName, status: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }

}
