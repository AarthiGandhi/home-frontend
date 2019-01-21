import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../../grocery.model';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {

  @Input() grocery: Grocery;

  constructor() { }

  ngOnInit() {
    console.log('loaded grocery item with grocery as ' + this.grocery);

  }

}
