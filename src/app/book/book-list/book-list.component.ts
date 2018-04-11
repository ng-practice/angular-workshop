import { Component, OnInit } from '@angular/core';
import { Book } from 'models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { BookDataService } from '../shared/book-data.service';
import { Store, select } from '@ngrx/store';

import * as fromBook from '../reducers';
import { LoadAll } from '../actions/book.actions';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private _store: Store<fromBook.State>) {
    this.books$ = _store.pipe(select(s => s.bookShelf.books.all));
  }

  ngOnInit() {
    this._store.dispatch(new LoadAll());
  }

  removeBook(book: Book) {
    // this.bookService
    //   .removeBook(book.isbn)
    //   .pipe(switchMap(() => (this.books$ = this.bookService.getBooks())))
    //   .subscribe();
  }
}
