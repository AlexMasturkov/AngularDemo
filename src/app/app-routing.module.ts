import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [

  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full',   
    },
    {
      path:'home',
      pathMatch:'full',
      component:HomeComponent,
      } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
