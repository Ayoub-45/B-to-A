import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor() {}
  getAuthors(): string[] {
    return ['Ayoub', 'Ghaza'];
  }
}
