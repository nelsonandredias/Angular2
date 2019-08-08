import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 1', 'This is simple a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 2', 'This is simple a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test recipe 3', 'This is simple a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
