import { Book } from 'models';

import { BookCollectionActions, BookCollectionActionTypes } from '../actions/book-collection.actions';


export interface BookSlice {
  // Data State
  all: Book[];
  // Communication State
  isLoading: boolean;
  isLoaded: boolean;
}

const initialSlice: BookSlice = {
  all: [],
  isLoading: false,
  isLoaded: false
};

export function reducer(slice = initialSlice, action: BookCollectionActions) {
  switch (action.type) {
    case BookCollectionActionTypes.Log:
      console.log('Hit');
      return slice;
    case BookCollectionActionTypes.Load:
      return {
        ...slice,
        isLoading: true
      };
    case BookCollectionActionTypes.LoadSuccess:
      return {
        ...slice,
        all: action.payload
      };
    default:
      return slice;
  }
}
