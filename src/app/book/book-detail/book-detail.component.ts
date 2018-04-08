import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) =>
        this.bookService.getBookByIsbn(params.isbn)
      )
    );
  }
}
