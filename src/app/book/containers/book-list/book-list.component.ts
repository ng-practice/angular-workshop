import { Component, OnInit } from '@angular/core';
import { Book } from 'models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  removeBook(book: Book) {
    this.bookService
      .removeBook(book.isbn)
      .pipe(switchMap(() => (this.books$ = this.bookService.getBooks())))
      .subscribe();
  }
}
