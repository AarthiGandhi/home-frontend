import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { HeaderComponent } from './header/header.component';
import { GroceryEditComponent } from './groceries/grocery-edit/grocery-edit.component';
import { HomeComponent } from './home/home.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryAddComponent } from './groceries/grocery-add/grocery-add.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';
import { GroceryItemComponent } from './groceries/grocery-list/grocery-item/grocery-item.component';
import { GroceryPromptComponent } from './groceries/grocery-prompt/grocery-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceriesComponent,
    PasswordsComponent,
    HeaderComponent,
    GroceryEditComponent,
    HomeComponent,
    GroceryListComponent,
    GroceryAddComponent,
    GroceryDetailComponent,
    GroceryItemComponent,
    GroceryPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
