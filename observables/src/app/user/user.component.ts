import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );

  }

  // add data to Subject
  onActivated() {
    this.userService.activatedEmitter.next(true);
  }

}
