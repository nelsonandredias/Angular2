import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFormModel } from '../models/userForm.model';
import { NgForm } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  subscriptionValues: string[];
  defaultSubscription = 'Advanced';
  submitted = false;

  submittedFormReview: UserFormModel = {

    subscription: '',
    email: '',
    password: ''

  };

  // access angular form
  @ViewChild('formRefElem', {static: false}) submittedForm: NgForm;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.subscriptionValues = this.formService.getAllSubscriptionsValues();
  }

  onSubmit() {

    this.submittedFormReview.subscription = this.submittedForm.value.subscriptionField;
    this.submittedFormReview.email = this.submittedForm.value.emailField;
    this.submittedFormReview.password = this.submittedForm.value.passwordField;

    this.submitted = true;
  }

}
