import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
    'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg'),
    new Recipe('Another  test Recipe', 'This is simply a test',
    'https://picturetherecipe.com/wp-content/uploads/2020/04/Palak-Paneer-PTR-Featured-1-395x500.jpg')
  ];

  @Output() list_recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe : Recipe){
    this.list_recipeSelected.emit(recipe);
  }

}
