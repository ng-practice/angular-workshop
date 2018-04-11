import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Book } from 'models';
import { Observable } from 'rxjs';

import * as fromBook from '../reducers';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  styles: [
    'mat-spinner { margin-left: auto; margin-right: auto; }'
  ]
})
export class BookDetailComponent {
  isLoaded$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  book$: Observable<Book>;

  constructor(store: Store<fromBook.State>) {
    this.isLoaded$ = store.pipe(select(s => s.bookShelf.selectedBook.isLoaded));
    this.isLoading$ = store.pipe(
      select(s => s.bookShelf.selectedBook.isLoading)
    );
    this.book$ = store.pipe(select(s => s.bookShelf.selectedBook.selected));
  }
}
