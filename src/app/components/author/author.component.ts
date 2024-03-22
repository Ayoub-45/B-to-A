import { Component, inject } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../../summary.pipe';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgFor, FormsModule, SummaryPipe],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  email: string = 'me@example.com';
  isActive = false;
  text: string =
    'lorem Ipsm lokskfnjnscjnsnjcnsdq,kck,xsqdgrf lskkfksfkjnsqjkncjqnls,ckqs,kl,fl,qklflekgfe';
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
