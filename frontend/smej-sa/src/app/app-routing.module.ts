import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./userpage/userpage.component";
import {AddpageComponent} from "./addpage/addpage.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {RegisterpageComponent} from "./registerpage/registerpage.component";

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
