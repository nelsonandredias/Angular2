import { Component } from '@angular/core';
import { AccountType } from './shared/account.type';
import { InformationType } from './shared/information.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onAccountAdded( newAccount: AccountType) {
    this.accounts.push(newAccount);
  }


  onStatusChanged( updateInfo: InformationType) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
