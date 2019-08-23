import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFormModel } from './models/user-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  userReview: UserFormModel = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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


  onSubmit() {
    this.submitted = true;
    this.userReview.username = this.submmitedForm.value.userData.username;
    this.userReview.email = this.submmitedForm.value.userData.email;
    this.userReview.secretQuestion = this.submmitedForm.value.secrt;
    this.userReview.answer = this.submmitedForm.value.questionAnswer;
    this.userReview.gender = this.submmitedForm.value.gender;

    // reset the form
    this.submmitedForm.reset();
  }

}
