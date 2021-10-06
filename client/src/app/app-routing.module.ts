import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClaimComponent } from "./components/claimComponents/claim/claim.component";
import { OrderComponent } from "./components/orderComponents/order/order.component";

const routes: Routes = [
  {
    path: "",
    component: OrderComponent,
  },
  { path: "claim", component: ClaimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
