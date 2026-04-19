import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FavoritPage } from './favorit.page';
import { FavoritPageRoutingModule } from './favorit-routing.module';

@NgModule({
  declarations: [FavoritPage],
  imports: [
    CommonModule,
    IonicModule,
    FavoritPageRoutingModule
  ]
})
export class FavoritPageModule {}
