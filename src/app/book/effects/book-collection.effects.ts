import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  BookCollectionActionTypes,
  LoadError,
  LoadSuccess
} from '../actions/book-collection.actions';
import { BookDataService } from '../shared/book-data.service';
import { of } from 'rxjs';

@Injectable()
export class BookCollectionEffects {
  @Effect()
  load = this._actions$.pipe(
    ofType(BookCollectionActionTypes.Load),
    switchMap(() =>
      this._books
        .getBooks()
        .pipe(
          map(books => new LoadSuccess(books)),
          catchError(err => of(new LoadError(err)))
        )
    )
  );

  constructor(private _actions$: Actions, private _books: BookDataService) {}
}
