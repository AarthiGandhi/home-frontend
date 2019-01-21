import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../grocery.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css']
})
export class GroceryEditComponent implements OnInit {
  name: string;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] != null;
      }
    );
    console.log('loaded grocery edit');
  }
}
