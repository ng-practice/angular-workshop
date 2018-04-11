import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromBook from '../reducers';
import { BookDataService } from '../shared/book-data.service';
import { Load } from '../actions/selected-book.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class EnsureBookExist implements CanActivate {
  constructor(
    private _store: Store<fromBook.State>,
    private _books: BookDataService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const isbn = route.paramMap.get('isbn');

    return this._store.pipe(
      select(s => s.bookShelf.selectedBook.isLoaded),
      map(isLoaded => {
        if (!isLoaded) {
          this._store.dispatch(new Load(isbn));
        }

        return true;
      })
    );
  }
}
