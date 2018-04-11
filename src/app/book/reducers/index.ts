import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromBook from './book-collection.reducer';
import * as fromBookDraft from './create-book.reducer';

// API store.bookshelf.books.all -> Book[]
export interface BookState {
  books: fromBook.BookSlice;
  bookDraft: fromBookDraft.CreateBookSlice;
}

export interface State extends fromRoot.State {
  // feature name
  bookShelf: BookState;
}

export const reducers: ActionReducerMap<BookState> = {
  books: fromBook.reducer,
  bookDraft: fromBookDraft.reducer
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

export const hasFailed = createSelector(
  visitBookShelf,
  slice => slice.books.hasFailed
);

export const isLoading = createSelector(
  visitBookShelf,
  slice => slice.books.isLoading
);

export const combineSelectAll = createSelector(
  selectAll,
  selectAll,
  (b1, b2) => [...b1, ...b2]
);
