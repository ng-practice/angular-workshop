import { Book } from 'models';
import { Action } from '@ngrx/store';

export interface BookSlice {
  all: Book[];
}

const initialSlice: BookSlice = {
  all: []
};

export function reducer(slice = initialSlice, action: Action) {
  switch (action.type) {
    case 'LOG':
      console.log('Hit');
      return slice;
    default:
      return slice;
  }
}
