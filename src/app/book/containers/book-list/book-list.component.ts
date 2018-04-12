import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { BookDataService } from '../../shared/book-data.service';
import { Store, select } from '@ngrx/store';

import * as fromBook from '../../reducers';
import { Log, Load } from '../../actions/book-collection.actions';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  styles: ['mat-spinner { margin-left: auto; margin-right: auto; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  hasFailed$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  books$: Observable<Book[]|Error>;

  constructor(
    private _store: Store<fromBook.State>,
    private bookService: BookDataService
  ) {
    this.hasFailed$ = _store.pipe(select(fromBook.hasFailed));
    this.isLoading$ = _store.pipe(select(fromBook.isLoading));
    this.books$ = _store.pipe(select(fromBook.selectAll));
  }

  ngOnInit() {
    this._store.dispatch(new Load());
  }

  removeBook(book: Book) {
    this.bookService
      .removeBook(book.isbn)
      .pipe(switchMap(() => (this.books$ = this.bookService.getBooks())))
      .subscribe();
  }
}
