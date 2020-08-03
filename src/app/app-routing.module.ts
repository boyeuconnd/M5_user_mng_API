import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContentsComponent} from './users/contents/contents.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserAddComponent} from './users/user-add/user-add.component';


const routes: Routes = [
  {
    path: 'user',
    children:[
      {path:'',component:ContentsComponent},
      {path: ':id/edit',component: UserEditComponent},
      {path:'create',component:UserAddComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
