import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  // access angular form
  @ViewChild('formRefElem', {static: false}) submmitedForm: NgForm;

  // update the username input with the default value
  suggestUserName() {
    const suggestUserName = 'Superuser';
    this.submmitedForm.form.patchValue({
      userData: {
        username: suggestUserName
      }
    });
  }


  /* onSubmit(form: NgForm) {
    console.log(form);
  } */

  onSubmit() {
    console.log(this.submmitedForm);
  }

}
