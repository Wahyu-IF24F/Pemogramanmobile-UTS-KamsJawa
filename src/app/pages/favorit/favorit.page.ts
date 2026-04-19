import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kata } from '../../models/kata.model';
import { FavoritService } from '../../services/favorit.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss']
})
export class FavoritPage implements OnInit {

  favorit$!: Observable<Kata[]>;

  constructor(
    private favoritService: FavoritService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.favorit$ = this.favoritService.favorit$;
  }

  hapusFavorit(kata: Kata): void {
    this.favoritService.hapusFavorit(kata.jawa);
  }

  async hapusSemuaFavorit(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Semua',
      message: 'Yakin ingin menghapus semua kata favorit?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        {
          text: 'Hapus',
          role: 'destructive',
          handler: () => {
            this.favoritService.getFavorit().forEach(k =>
              this.favoritService.hapusFavorit(k.jawa)
            );
          }
        }
      ]
    });
    await alert.present();
  }

  getLevelClass(level: string): string {
    const map: Record<string, string> = {
      ngoko: 'badge-ngoko',
      madya: 'badge-madya',
      krama: 'badge-krama'
    };
    return map[level] || '';
  }

  trackByJawa(_: number, kata: Kata): string {
    return kata.jawa;
  }
}
