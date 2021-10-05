import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClaimComponent } from "./claim/claim.component";
import { OrderComponent } from "./order/order.component";

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
