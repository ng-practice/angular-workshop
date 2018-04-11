import { Action } from '@ngrx/store';
import { Book } from 'models';

export enum BookCollectionActionTypes {
  Log = '[Book-Collection] Log',
  Load = '[Book-Collection] Load books',
  LoadSuccess = '[Book-Collection] Loading books succeeded'
}

export class Log implements Action {
  readonly type = BookCollectionActionTypes.Log;
}

export class Load implements Action {
  readonly type = BookCollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = BookCollectionActionTypes.LoadSuccess;

  constructor(public payload: Book[]) {}
}

export type BookCollectionActions = Log | Load | LoadSuccess;
