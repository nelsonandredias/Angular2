import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
      emailReactive: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      contactData: new FormGroup({
        addressReactive: new FormControl(null, Validators.required),
        cityReactive: new FormControl(null, Validators.required)
      }),
      genderReactive: new FormControl('male'),
      hobbiesReactive: new FormArray([])
    });

    // accessing reactive form values once it changes
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
    });

    // accessing reactive form status once it changes
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
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

  // create a synchronous custom name validator for the userNameReactive formControl
  forbiddenNames(control: FormControl): {[s: string]: boolean} {

    // verify typed name is forbidden (if exists in the the array of forbiddenUsernames)
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    // otherwise, return null because it's valid
    return null;
  }

  // create an async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {

    const newPromise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          // verify email is "test@test.com" ( it means, it is invalid)
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            //otherwise, return null because it's valid
            resolve(null);
          }
        }, 2000);
      }
    );

    return newPromise;
  }

}
