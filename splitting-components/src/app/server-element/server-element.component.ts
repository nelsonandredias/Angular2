import { Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy {

  // receive data from parent component
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  //1. first method to be called
  constructor() {
    console.log('constructor called');
   }

   //2. is called after constructor and before ngOnInit
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ');
    console.log(changes);
   }

   //3. is called after constructor
  ngOnInit() {
    console.log('ngOnInit called');
  }

  //4. is called after ngOnInit and component content is displayed
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  //5. changed after new changes
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
