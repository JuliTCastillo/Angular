import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //suponemos que ya estamos en /dashboard
  {path:"", children:[
    {
      path: "home",
      loadChildren: () => import('./pages/home/home.module').then((m)=>m.HomeModule)
    },
    { //En el caso de que alguien escriba solamente /dashboard
      path: '',
      pathMatch: 'full',
      redirectTo: 'home' //Nosotros vamos a dirigirlo acá
    },
    {
      path: "users",
      loadChildren: () => import('./pages/users/users.module').then((m)=>m.UsersModule)
    },
    {
      path:"sales",
      loadChildren: () => import('./pages/sales/sales.module').then((m)=> m.SalesModule)
    },
    {
      path:"products",
      loadChildren: () => import("./pages/products/products.module").then((m)=> m.ProductsModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
