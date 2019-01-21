import { Grocery } from './grocery.model';
import { EventEmitter } from '@angular/core';

export class GroceryService {

  grocerySelected = new EventEmitter<Grocery>();

  private groceries: Grocery[] = [
    new Grocery('Rice', 'KG'),
    new Grocery('Oil', 'LITRE')
  ];

  constructor() { }

  getGroceries(): Grocery[] {
    return this.groceries.slice();
  }

  getGroceryByName(name: string) {
    return this.groceries.find(g => g.name === name);
  }



}
