import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  // property that will hold the form
  signupForm: FormGroup;

  ngOnInit() {

    // create and initialize a reactive form
    this.signupForm = new FormGroup({

      'usernameReactive': new FormControl(null, Validators.required),
      'emailReactive': new FormControl(null, [Validators.required, Validators.email]),
      'genderReactive': new FormControl('male')

    });
  }

  onSubmit() {

    // submit the form based on the reactive form
    console.log(this.signupForm);

  }

}
