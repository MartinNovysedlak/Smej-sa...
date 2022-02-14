import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./Component/userpage/userpage.component";
import {AddpageComponent} from "./Component/addpage/addpage.component";
import {HomepageComponent} from "./Component/homepage/homepage.component";
import {RegisterpageComponent} from "./Component/registerpage/registerpage.component";
import {UserjokeComponent} from "./Component/userjoke/userjoke.component";
import {AuthGuard} from "./auth.guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: UserpageComponent},
  { path: 'user', component: UserjokeComponent, canActivate: [AuthGuard] },
  { path: 'addpage', component: AddpageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
