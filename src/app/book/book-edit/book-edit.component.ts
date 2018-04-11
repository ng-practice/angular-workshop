import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Book } from 'models';
import { Observable } from 'rxjs';
import { mergeMap, distinct } from 'rxjs/operators';

import { Draft, UndoDraft } from '../actions/selected-book.actions';
import * as fromBook from '../reducers';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  book: Book;

  book$: Observable<Book>;

  constructor(
    private _store: Store<fromBook.State>,
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {
    this.book$ = _store.pipe(select(s => s.bookShelf.selectedBook.draft));
  }

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: { isbn: string }) =>
          this.bookService.getBookByIsbn(params.isbn)
        )
      )
      .subscribe(book => (this.book = book));
  }

  commit(book: Book) {
    this._store.dispatch(new Draft(book));
  }

  undo() {
    this._store.dispatch(new UndoDraft());
  }

  bookUpdate(value: Book) {
    this._store.dispatch(new Draft(value));
    this.book = value;
  }

  onSubmit(value) {
    this.bookService
      .updateBook(this.book.isbn, value)
      .subscribe((book: Book) => console.log('Book updated', book));
  }
}
