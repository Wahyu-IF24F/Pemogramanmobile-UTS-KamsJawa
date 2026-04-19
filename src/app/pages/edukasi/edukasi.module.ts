import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EdukasiPage } from './edukasi.page';
import { EdukasiPageRoutingModule } from './edukasi-routing.module';

@NgModule({
  declarations: [EdukasiPage],
  imports: [
    CommonModule,
    IonicModule,
    EdukasiPageRoutingModule
  ]
})
export class EdukasiPageModule {}
