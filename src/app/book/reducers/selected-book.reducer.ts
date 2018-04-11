import { Book } from 'models';

import {
  SelectedBookActions,
  SelectedBookActionTypes
} from '../actions/selected-book.actions';

export interface SelectedBookSlice {
  selected: Book;
  isLoaded: boolean;
  isLoading: boolean;
}

const initialSlice: SelectedBookSlice = {
  selected: {} as Book,
  isLoaded: false,
  isLoading: false
};

export function reducer(
  slice = initialSlice,
  action: SelectedBookActions
): SelectedBookSlice {
  switch (action.type) {
    case SelectedBookActionTypes.Load:
      return {
        ...slice,
        isLoading: true
      };
    case SelectedBookActionTypes.LoadSuccess:
      return {
        isLoaded: true,
        isLoading: false,
        selected: action.payload
      };
    default:
      return slice;
  }
}
