import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path : "",
    component : MainPageComponent,
  },
  {
    path:"admin",
    component:AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
