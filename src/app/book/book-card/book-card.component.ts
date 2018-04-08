import { Component, OnInit } from '@angular/core';
import { Book } from 'models';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent {
  book: Book;
}
