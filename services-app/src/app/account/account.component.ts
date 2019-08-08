import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountType } from '../shared/account.type';
import { InformationType } from '../shared/information.type';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: AccountType;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<InformationType>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
  }

}
