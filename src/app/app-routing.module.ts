import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './users/list/list.component';
import {ContentsComponent} from './users/contents/contents.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: 'user',
    children:[
      {path:'',component:ContentsComponent},
      {path: ':id/edit',component: UserEditComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
