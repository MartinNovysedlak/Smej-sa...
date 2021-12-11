import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./Component/userpage/userpage.component";
import {AddpageComponent} from "./Component/addpage/addpage.component";
import {HomepageComponent} from "./Component/homepage/homepage.component";
import {RegisterpageComponent} from "./Component/registerpage/registerpage.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'user', component: UserpageComponent },
  { path: 'addpage', component: AddpageComponent },
  { path: 'register', component: RegisterpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
