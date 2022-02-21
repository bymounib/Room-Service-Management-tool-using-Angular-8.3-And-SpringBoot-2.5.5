import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/notFoundComponent/not-found/not-found.component";
import { AuthGuard } from 'src/app/components/guards/auth.guard';
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "user", loadChildren:()=>import('./modules/user/user.module').then((m)=>m.UserModule) , canActivate: [AuthGuard]}, 
  { path: "login", component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}, 

  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
