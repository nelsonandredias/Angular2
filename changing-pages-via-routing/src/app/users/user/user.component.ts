import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: UserModel;

  paramsObsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //use snapshot for the first initialization
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // for the subsequent changes, use observables
    this.paramsObsSubscription = this.route.params.subscribe(
      (params: Params) =>  {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  // destroy observable subscription after leaving this component
  ngOnDestroy() {
    this.paramsObsSubscription.unsubscribe();
  }

}
