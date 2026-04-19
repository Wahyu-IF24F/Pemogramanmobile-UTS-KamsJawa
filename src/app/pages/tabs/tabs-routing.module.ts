import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'kamus',
        loadChildren: () =>
          import('../kamus/kamus.module').then(m => m.KamusPageModule)
      },
      {
        path: 'edukasi',
        loadChildren: () =>
          import('../edukasi/edukasi.module').then(m => m.EdukasiPageModule)
      },
      {
        path: 'favorit',
        loadChildren: () =>
          import('../favorit/favorit.module').then(m => m.FavoritPageModule)
      },
      {
        path: 'info',
        loadChildren: () =>
          import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: 'kamus',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
