import { Book } from 'models';

import { BookActions, BookActionTypes } from '../actions/book.actions';

export interface BookSlice {
  all: Book[];
}

const initialSlice: BookSlice = {
  all: []
};

export function reducer(slice = initialSlice, action: BookActions) {
  switch (action.type) {
    case BookActionTypes.Create:
      return {
        ...slice,
        all: [...slice.all, action.payload]
      };
    case BookActionTypes.LoadAllSuccess:
      return {
        ...slice,
        all: action.payload
      };
    default:
      return slice;
  }
}
