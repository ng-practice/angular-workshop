import { Book } from 'models';
import { Action } from '@ngrx/store';
import {
  CreateBookActions,
  CreateBookActionTypes
} from '../actions/create-book.actions';

export interface CreateBookSlice {
  draft: Book;
}

const initialSlice: CreateBookSlice = {
  draft: {} as Book
};

export function reducer(slice = initialSlice, action: CreateBookActions) {
  switch (action.type) {
    case CreateBookActionTypes.SaveDraftSuccess:
    case CreateBookActionTypes.RecoverDraftFromCacheSuccess:
      return {
        ...slice,
        draft: action.payload
      };
    case CreateBookActionTypes.RemoveDraft:
      return {
        ...slice,
        draft: {} as Book
      };
    default:
      return slice;
  }
}
