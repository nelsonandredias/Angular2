import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {

  private firstOnSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    // create a new custom observable
    const customIntervalObservable = Observable.create(
      observer => {
        let count = 0;
        setInterval( () => {
          observer.next(count);
          count++;
        } , 1000);
      }
    );

    // subscribe to custom observable
    this.firstOnSubscription = customIntervalObservable.subscribe(
      data => {
        console.log(data);
      }
    );

  }

  ngOnDestroy() {
    // unsubscribe custom observable
    this.firstOnSubscription.unsubscribe();

  }

}
