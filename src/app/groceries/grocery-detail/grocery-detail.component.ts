import { Component, OnInit } from '@angular/core';
import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocery.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {

  grocery: Grocery;
  name: string;

  constructor(private groceryService: GroceryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          this.grocery = this.groceryService.getGroceryByName(this.name);
          console.log('got grocery ' + this.grocery.name);
        }
      );
  }

}
