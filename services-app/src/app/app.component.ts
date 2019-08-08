import { Component, OnInit } from '@angular/core';
import { AccountType } from './shared/account.type';
import { InformationType } from './shared/information.type';
import { AccountsService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  accounts: AccountType[] = [];

  constructor(private accountService: AccountsService) {
  }

  //initialize array
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded( newAccount: AccountType) {
    this.accountService.addAccount(newAccount);
  }


  onStatusChanged( updateInfo: InformationType) {
    this.accountService.updateStatus(updateInfo);
  }

}
