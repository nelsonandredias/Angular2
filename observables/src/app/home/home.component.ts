import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public counter: number;

  private firstObsSubscription: Subscription;

  constructor() { }


  ngOnInit() {

    /* every time the component is loaded a new stream of data is launched:
      thus, it's important to close the observable once we leave the component (OnDestroy)
    */
    this.firstObsSubscription = interval(1000).subscribe(
      count => {
        this.counter = +count;
        console.log(count);
      }
    );

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
