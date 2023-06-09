import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static : false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static : false}) amountInputRef : ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem()
  {
    // console.log("Added");
    
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

  ondeleteItem()
  {
    console.log("Delete");
  }

}
