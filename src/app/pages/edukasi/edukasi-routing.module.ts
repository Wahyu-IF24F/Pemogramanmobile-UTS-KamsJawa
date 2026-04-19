import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdukasiPage } from './edukasi.page';

const routes: Routes = [
  { path: '', component: EdukasiPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdukasiPageRoutingModule {}
