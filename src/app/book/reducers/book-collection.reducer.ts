import { Book } from 'models';

import { BookCollectionActions, BookCollectionActionTypes } from '../actions/book-collection.actions';


export interface BookSlice {
  // Data State
  all: Book[];
  // Communication State
  isLoading: boolean;
  isLoaded: boolean;
  hasFailed: boolean;
  error: Error;
}

const initialSlice: BookSlice = {
  all: [],
  isLoading: false,
  isLoaded: false,
  hasFailed: false,
  error: {} as Error
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
        isLoaded: true,
        isLoading: false,
        all: action.payload
      };
    case BookCollectionActionTypes.LoadError:
      return {
        ...slice,
        isLoading: false,
        hasFailed: true,
        error: action.payload
      };
    default:
      return slice;
  }
}
