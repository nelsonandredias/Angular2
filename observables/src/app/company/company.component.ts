import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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

          // observer completed -> stream is closed
          if (count === 7) {
            observer.complete();
          }

          // observer throw error
          if ( count > 5) {
            observer.error( new Error('Count is greater than 5!'));
          }
          count++;
        } , 1000);
      }
    );


    // subscribe to custom observable that has an operator (pipe) to customize/transform data before observer subscription
    this.firstOnSubscription = customIntervalObservable.pipe(
        map(
          (data: number) => {
            return 'round: ' + (data + 1);
          }
        )
      ).subscribe(
      data => {
        console.log(data);
      },
      error => { // observable is canceled due to error
        console.log(error);
        alert(error);
      },
      () => { // observable is completed
        console.log('completed');
        alert('completed!');
      }
    );

  }

  ngOnDestroy() {
    // unsubscribe custom observable
    this.firstOnSubscription.unsubscribe();

  }

}
