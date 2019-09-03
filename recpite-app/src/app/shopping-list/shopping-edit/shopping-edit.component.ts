import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('formRefElem', {static: false}) shoppingListForm: NgForm;

  // variable to create and delete subscription
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    // subscribe any changes
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;

        // get the current ingredient to edit
        this.editedItem = this.shoppingListService.getIngredient(index);
        // set form values
        this.shoppingListForm.setValue({
          ingredientName: this.editedItem.name,
          ingredientAmount: this.editedItem.amount
        });
      }
    );

  }


  onAddNewIngredient(form: NgForm) {

    console.log(form);
    // get the form value
    const formValue = form.value;

    const newIngredient = new Ingredient(formValue.ingredientName, formValue.ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);

  }

  ngOnDestroy() {
    // destroy subscription
    this.subscription.unsubscribe();
  }

}
