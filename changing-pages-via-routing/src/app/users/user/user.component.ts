import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //use snapshot for the first initialization
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // for the subsequent changes, use observables
    this.route.params.subscribe(
      (params: Params) =>  {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
