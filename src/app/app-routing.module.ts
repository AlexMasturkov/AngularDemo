import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';

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
      } ,
      {
        path:'about',
        pathMatch:'full',
        component:AboutComponent,
        } ,
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
