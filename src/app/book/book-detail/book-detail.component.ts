import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'models';

import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBookByIsbn(params.isbn)
        .subscribe(book => (this.book = book));
    });
  }
}
