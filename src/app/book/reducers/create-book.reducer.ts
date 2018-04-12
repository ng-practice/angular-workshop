import {
  CreateBookActions,
  CreateBookActionTypes
} from '../actions/create-book.actions';
import { Book } from '../models';

export interface CreateBookSlice {
  draft: Book;
  pastDrafts: Book[];
}

const initialSlice: CreateBookSlice = {
  draft: {} as Book,
  pastDrafts: []
};

export function reducer(slice = initialSlice, action: CreateBookActions) {
  switch (action.type) {
    case CreateBookActionTypes.SaveDraftSuccess:
      return {
        ...slice,
        draft: action.payload,
        pastDrafts: [...slice.pastDrafts, action.payload]
      };
    case CreateBookActionTypes.UndoDraft:
      const previous =
        slice.pastDrafts[slice.pastDrafts.length - 2] || ({} as Book);
      const pastDrafts = slice.pastDrafts.slice(0, -1);

      return {
        ...slice,
        draft: previous,
        pastDrafts
      };
    case CreateBookActionTypes.RecoverDraftFromCacheSuccess:
      return {
        ...slice,
        draft: action.payload,
        pastDrafts: [action.payload]
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
