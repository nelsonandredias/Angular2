import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  defaultSubscription = 'advanced';
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submitted");
    this.submitted = true;
  }

}
