import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children:[
          {
            path:'',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'add',
        children:[
          {
            path:'',
            loadChildren: '../add/add.module#AddPageModule'
          }
        ]
      },
      {
        path: 'edit/:id',
        children:[
          {
            path:'',
            loadChildren: '../edit/edit.module#EditPageModule'
          }
        ]
      },
      {
        path: ':id',
        children:[
          {
            path:'',
            loadChildren: '../details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
