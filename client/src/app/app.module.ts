import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { OrderComponent } from "./components/orderComponents/order/order.component";
import { AddOrderComponent } from "./components/orderComponents/add-order/add-order.component";
import { PizzaComponent } from "./components/orderComponents/menu/pizza/pizza.component";
import { SandwichComponent } from "./components/orderComponents/menu/sandwich/sandwich.component";
import { DrinkComponent } from "./components/orderComponents/menu/drink/drink.component";
import { ClaimComponent } from "./components/claimComponents/claim/claim.component";
import { AddClaimComponent } from "./components/claimComponents/add-claim/add-claim.component";
import { HttpClientModule } from "@angular/common/http";
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
