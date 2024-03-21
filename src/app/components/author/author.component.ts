import { Component, inject } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgFor],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  isActive = false;
  authors;
  authorService = inject(AuthorService);
  constructor() {
    this.authors = this.authorService.getAuthors();
  }
  onSave($event: any): void {
    $event.stopPropgation();
    console.log('Button was clicked', $event);
  }
  onKeyUp(email: string): void {
    alert('Submitting ... with ' + email);
  }
}
