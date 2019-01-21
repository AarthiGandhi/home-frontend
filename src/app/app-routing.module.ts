import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceriesComponent } from './groceries/groceries.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { HomeComponent } from './home/home.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';
import { GroceryPromptComponent } from './groceries/grocery-prompt/grocery-prompt.component';
import { GroceryEditComponent } from './groceries/grocery-edit/grocery-edit.component';

const routes: Routes = [
  { path: 'groceries', component: GroceriesComponent, children: [
    { path: '', component: GroceryPromptComponent},
    { path: 'new', component: GroceryEditComponent },
    { path: ':name', component: GroceryDetailComponent },
    { path: ':name/edit', component: GroceryEditComponent }
  ] },
  { path: 'passwords', component: PasswordsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
