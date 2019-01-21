import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  groceries: Grocery[];

  constructor(private groceryService: GroceryService) { }

  ngOnInit() {
    this.groceries = this.groceryService.getGroceries();
    console.log('loaded groceries with size ' + this.groceries.length);
  }

}
