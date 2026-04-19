import { Component } from '@angular/core';
import { FavoritService } from '../../services/favorit.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  jumlahFavorit$ = this.favoritService.favorit$;

  constructor(private favoritService: FavoritService) {}

  getFavCount(): number {
    return this.favoritService.getFavorit().length;
  }
}
