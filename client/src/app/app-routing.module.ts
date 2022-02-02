import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClaimComponent } from "./components/claimComponents/claim/claim.component";
import { AuthGuard } from "./components/guards/auth.guard";
import { OrderComponent } from "./components/orderComponents/order/order.component";

const routes: Routes = [
  {
    path: "/order",
    component: OrderComponent, canActivate: [AuthGuard]
  },
  { path: "claim", component: ClaimComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
