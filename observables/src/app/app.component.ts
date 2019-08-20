import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated: boolean = false;
  private activatedSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // get data from Subject
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      data => {
        this.userActivated = data;
      }
    );
  }

  // unsubscribe from Subject
  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }

}
