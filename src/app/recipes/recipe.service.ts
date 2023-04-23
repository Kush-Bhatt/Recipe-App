import { EventEmitter, Injectable } from "@angular/core";
import { Recipe} from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    constructor(private slService : ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A test Recipe',
         'This is simply a test',
        'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg',
        [
            new Ingredient('Potato',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another  test Recipe', 
        'This is simply a test',
        'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg',
        [
            new Ingredient('Onion',2),
            new Ingredient('Tomato',3)
        ])
      ];

    getRecipe()
    {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredient : Ingredient[])
    {
         this.slService.addIngFromRecipe(ingredient);
    }
}