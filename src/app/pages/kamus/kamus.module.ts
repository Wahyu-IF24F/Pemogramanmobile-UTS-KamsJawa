import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { KamusPage } from './kamus.page';
import { KamusPageRoutingModule } from './kamus-routing.module';

@NgModule({
  declarations: [KamusPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamusPageRoutingModule
  ]
})
export class KamusPageModule {}
