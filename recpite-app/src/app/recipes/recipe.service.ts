import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 1',
              'This is simple a test',
              'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
              [new Ingredient('Meat', 1),
               new Ingredient('French Fries', 20)
            ]),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 2',
              'This is simple a test',
              'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
              [new Ingredient('Eggs', 4),
               new Ingredient('Salad', 1)
            ]),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 3',
              'This is simple a test',
              'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
              [new Ingredient('Fish', 1),
               new Ingredient('Rice', 1)
            ])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    console.log("entered addIngredientsToShoppingList");
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

}
