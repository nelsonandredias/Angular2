import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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

      usernameReactive: new FormControl(null, Validators.required),
      emailReactive: new FormControl(null, [Validators.required, Validators.email]),
      contactData: new FormGroup({
        addressReactive: new FormControl(null, Validators.required),
        cityReactive: new FormControl(null, Validators.required)
      }),
      genderReactive: new FormControl('male'),
      hobbiesReactive: new FormArray([])

    });
  }

  onAddHobby() {
    const newFormControl = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbiesReactive') as FormArray).push(newFormControl);
  }


  onSubmit() {

    // submit the form based on the reactive form
    console.log(this.signupForm);

  }

}
