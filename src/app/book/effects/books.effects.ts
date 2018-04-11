import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { BookDataService } from '../shared/book-data.service';
import {
  BookActionTypes,
  Create,
  CreateSuccess,
  LoadAllSuccess,
  LoadAll
} from '../actions/book.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  @Effect()
  create = this._actions$
    .ofType<Create>(BookActionTypes.Create)
    .pipe(
      map(action => action.payload),
      switchMap(book =>
        this._books
          .createBook(book)
          .pipe(map(createdBook => new CreateSuccess(createdBook)))
      )
    );

  @Effect()
  loadAll = this._actions$
    .ofType<LoadAll>(BookActionTypes.LoadAll)
    .pipe(
      switchMap(() =>
        this._books.getBooks().pipe(map(books => new LoadAllSuccess(books)))
      )
    );

  constructor(private _actions$: Actions, private _books: BookDataService) {}
}
