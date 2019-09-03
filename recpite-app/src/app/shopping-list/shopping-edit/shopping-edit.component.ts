import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }


  onAddNewIngredient(form: NgForm) {

    console.log(form);
    // get the form value
    const formValue = form.value;

    const newIngredient = new Ingredient(formValue.ingredientName, formValue.ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);

  }

}
