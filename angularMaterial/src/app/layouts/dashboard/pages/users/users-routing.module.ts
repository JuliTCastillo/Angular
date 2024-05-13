import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  {path:"", component:UsersComponent},
  {
    // /dashboard/users/:id
    path: ':id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
