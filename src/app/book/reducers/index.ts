import { ActionReducerMap } from '@ngrx/store';

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
