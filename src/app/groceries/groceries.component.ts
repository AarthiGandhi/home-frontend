import { Component, OnInit, Output, Input } from '@angular/core';
import { Grocery } from './grocery.model';
import { GroceryService } from './grocery.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css'],
  providers: [GroceryService]
})
export class GroceriesComponent implements OnInit {

  selectedGrocery: Grocery;

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.groceryService.grocerySelected
      .subscribe(
        (grocery: Grocery) => {
          this.selectedGrocery = grocery;
        }
      );
      console.log('loaded grocery component with selected grocery ' + this.selectedGrocery);

  }

}
