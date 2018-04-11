import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromBook from './book-collection.reducer';

// API store.bookshelf.books.all -> Book[]
export interface BookState {
  books: fromBook.BookSlice;
}

export interface State extends fromRoot.State {
  // feature name
  bookShelf: BookState;
}

export const reducers: ActionReducerMap<BookState> = {
  books: fromBook.reducer
};

/**
 * {
 *  -> bookShelf: {
 *      books: {
 *        -> all: []
 *      }
 *    }
 *
 */

export const visitBookShelf = createFeatureSelector<BookState>('bookShelf');

export const selectAll = createSelector(
  visitBookShelf,
  slice => slice.books.all
);
