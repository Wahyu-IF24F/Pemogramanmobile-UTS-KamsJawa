import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Kata } from '../models/kata.model';

const STORAGE_KEY = 'kamus_favorit';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {

  private favoritSubject = new BehaviorSubject<Kata[]>(this.loadFromStorage());
  favorit$ = this.favoritSubject.asObservable();

  private loadFromStorage(): Kata[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(kata: Kata[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(kata));
  }

  getFavorit(): Kata[] {
    return this.favoritSubject.getValue();
  }

  isFavorit(jawa: string): boolean {
    return this.getFavorit().some(k => k.jawa === jawa);
  }

  toggleFavorit(kata: Kata): void {
    const current = this.getFavorit();
    const exists = current.some(k => k.jawa === kata.jawa);
    const updated = exists
      ? current.filter(k => k.jawa !== kata.jawa)
      : [...current, kata];
    this.favoritSubject.next(updated);
    this.saveToStorage(updated);
  }

  hapusFavorit(jawa: string): void {
    const updated = this.getFavorit().filter(k => k.jawa !== jawa);
    this.favoritSubject.next(updated);
    this.saveToStorage(updated);
  }
}
