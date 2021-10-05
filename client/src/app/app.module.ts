import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { OrderComponent } from "./order/order.component";
import { AddOrderComponent } from "./add-order/add-order.component";
import { PizzaComponent } from "./menu/pizza/pizza.component";
import { SandwichComponent } from "./menu/sandwich/sandwich.component";
import { DrinkComponent } from "./menu/drink/drink.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClaimComponent } from "./claim/claim.component";
import { AddClaimComponent } from "./add-claim/add-claim.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    OrderComponent,
    AddOrderComponent,
    PizzaComponent,
    SandwichComponent,
    DrinkComponent,
    ClaimComponent,
    AddClaimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
