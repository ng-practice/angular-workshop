import * as fromRoot from '../../reducers';
import * as fromBook from './book.reducer';
import { ActionReducerMap } from '@ngrx/store';

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
