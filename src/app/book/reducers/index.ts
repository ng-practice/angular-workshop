import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromBookCollection from './book.reducer';
import * as fromBook from './selected-book.reducer';

// API store.bookshelf.books.all -> Book[]
export interface BookState {
  books: fromBookCollection.BookSlice;
  selectedBook: fromBook.SelectedBookSlice;
}

export interface State extends fromRoot.State {
  // feature name
  bookShelf: BookState;
}

export const reducers: ActionReducerMap<BookState> = {
  books: fromBookCollection.reducer,
  selectedBook: fromBook.reducer
};
