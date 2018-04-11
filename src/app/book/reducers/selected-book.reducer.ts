import { Book } from 'models';

import {
  SelectedBookActions,
  SelectedBookActionTypes
} from '../actions/selected-book.actions';

export interface SelectedBookSlice {
  selected: Book;
  draft: Book;
  pastDrafts: Book[];
  isLoaded: boolean;
  isLoading: boolean;
}

const initialSlice: SelectedBookSlice = {
  selected: {} as Book,
  draft: {} as Book,
  pastDrafts: [],
  isLoaded: false,
  isLoading: false
};

export function reducer(
  slice = initialSlice,
  action: SelectedBookActions
): SelectedBookSlice {
  switch (action.type) {
    case SelectedBookActionTypes.Draft:
      const { draft, pastDrafts } = slice;
      return {
        ...slice,
        draft: action.payload,
        pastDrafts: [...pastDrafts, draft]
      };
    case SelectedBookActionTypes.UndoDraft:
      const previous = slice.pastDrafts[slice.pastDrafts.length - 1];
      const past = slice.pastDrafts.slice(0, slice.pastDrafts.length - 1);
      return {
        ...slice,
        draft: previous,
        pastDrafts: past
      };
    case SelectedBookActionTypes.Load:
      return {
        ...slice,
        isLoading: true
      };
    case SelectedBookActionTypes.LoadSuccess:
      return {
        ...slice,
        isLoaded: true,
        isLoading: false,
        selected: action.payload,
        draft: action.payload
      };
    default:
      return slice;
  }
}
