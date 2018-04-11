import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Book } from 'models';
import { map, switchMap, tap } from 'rxjs/operators';

import { LocalStorage } from '../../lib/local-storage';
import {
  CreateBook,
  CreateBookActionTypes,
  RecoverDraftFromCache,
  RecoverDraftFromCacheSuccess,
  RemoveDraft,
  SaveDraft,
  SaveDraftSuccess,
} from '../actions/create-book.actions';
import { BookDataService } from '../shared/book-data.service';

@Injectable()
export class CreateBookEffects {
  @Effect()
  saveDraft = this._actions$.pipe(
    ofType<SaveDraft>(CreateBookActionTypes.SaveDraft),
    switchMap(action =>
      this._localStorage
        .set('BOOK_DRAFT', action.payload)
        .pipe(map(draft => new SaveDraftSuccess(draft)))
    ),
    tap(() => this._snackBar.open('Draft saved successfully.'))
  );

  @Effect()
  recoverDraft = this._actions$.pipe(
    ofType<RecoverDraftFromCache>(CreateBookActionTypes.RecoverDraftFromCache),
    switchMap(action =>
      this._localStorage
        .get<Book>('BOOK_DRAFT')
        .pipe(map(book => new RecoverDraftFromCacheSuccess(book)))
    )
  );

  @Effect()
  createBook = this._actions$.pipe(
    ofType<CreateBook>(CreateBookActionTypes.CreateBook),
    switchMap(action =>
      this._books.createBook(action.payload).pipe(map(() => new RemoveDraft()))
    )
  );

  constructor(
    private _actions$: Actions,
    private _snackBar: MatSnackBar,
    private _localStorage: LocalStorage,
    private _books: BookDataService
  ) {}
}
