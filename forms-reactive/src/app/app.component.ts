import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];

  // create usernames for custom validators
  forbiddenUsernames = ['Ana', 'Maria', 'Joao'];

  // property that will hold the form
  signupForm: FormGroup;

  ngOnInit() {

    // create and initialize a reactive form
    this.signupForm = new FormGroup({

      usernameReactive: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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
    // create a new FormControl template
    const newFormControl = new FormControl(null, Validators.required);
    // add the new FormControl to the formArray
    (this.signupForm.get('hobbiesReactive') as FormArray).push(newFormControl);
  }


  onSubmit() {
    // submit the form based on the reactive form
    console.log(this.signupForm);
  }

  // create a custom name validator for the userNameReactive formControl
  forbiddenNames(control: FormControl): {[s: string]: boolean} {

    // verify typed name is forbidden (if exists in the the array of forbiddenUsernames)
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    // otherwise, return null because it's valid
    return null;
  }

}
