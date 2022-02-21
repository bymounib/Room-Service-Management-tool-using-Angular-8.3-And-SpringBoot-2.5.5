import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { OrderComponent } from './orderComponents/order/order.component';
import { ClaimComponent } from './claimComponents/claim/claim.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddOrderComponent } from './orderComponents/add-order/add-order.component';
import { PizzaComponent } from './orderComponents/menu/pizza/pizza.component';
import { SandwichComponent } from './orderComponents/menu/sandwich/sandwich.component';
import { DrinkComponent } from './orderComponents/menu/drink/drink.component';
import { AddClaimComponent } from './claimComponents/add-claim/add-claim.component';
import { DashboardComponent } from './dashboardComponents/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OrderComponent,
    ClaimComponent,
    SidebarComponent,
    NavbarComponent,
    AddOrderComponent,
    PizzaComponent,
    SandwichComponent,
    DrinkComponent,
    AddClaimComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class UserModule { }
