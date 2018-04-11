import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import {
  Load,
  LoadSuccess,
  SelectedBookActions,
  SelectedBookActionTypes
} from '../actions/selected-book.actions';
import { BookDataService } from '../shared/book-data.service';

@Injectable()
export class SelectedBookEffects {
  @Effect()
  load = this._actions$
    .ofType<Load>(SelectedBookActionTypes.Load)
    .pipe(
      map(action => action.payload),
      switchMap(isbn =>
        this._books.getBookByIsbn(isbn).pipe(map(book => new LoadSuccess(book)))
      )
    );

  constructor(private _actions$: Actions, private _books: BookDataService) {}
}
