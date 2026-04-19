import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InfoPage } from './info.page';
import { InfoPageRoutingModule } from './info-routing.module';

@NgModule({
  declarations: [InfoPage],
  imports: [
    CommonModule,
    IonicModule,
    InfoPageRoutingModule
  ]
})
export class InfoPageModule {}
