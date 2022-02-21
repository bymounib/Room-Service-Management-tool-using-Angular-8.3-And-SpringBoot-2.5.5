import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/components/guards/auth.guard';
import { ClaimComponent } from './claimComponents/claim/claim.component';
import { DashboardComponent } from './dashboardComponents/dashboard/dashboard.component';
import { OrderComponent } from './orderComponents/order/order.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children:[
    {
      path: "order",
      component: OrderComponent, canActivate: [AuthGuard]
    },
    { path: "claim", component: ClaimComponent, canActivate: [AuthGuard]},
    { path: "",redirectTo:'/user/order', component: OrderComponent, canActivate: [AuthGuard]},
  ],
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
