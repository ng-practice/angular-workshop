import { Action } from '@ngrx/store';
import { Book } from 'models';

export enum BookActionTypes {
  Create = '[Books] Create new Book',
  CreateSuccess = '[Books] Create new Book succeeded',
  AddSuccess = '[Books] Create new Book succeeded',
  LoadAll = '[Books] Load all Books',
  LoadAllSuccess = '[Books] Load all Books succeeded',
  LoadAllError = '[Books] Load all Books failed',
  RestoreFromLocalCache = '[Books] Restore cached Books from',
  RestoreFromLocalCacheSuccess = '[Books] Restore cached Books succeeded'
}

export class Create implements Action {
  readonly type = BookActionTypes.Create;

  constructor(public payload: Book) {}
}

export class CreateSuccess implements Action {
  readonly type = BookActionTypes.Create;

  constructor(public payload: Book) {}
}

export class LoadAll implements Action {
  readonly type = BookActionTypes.LoadAll;
}

export class LoadAllSuccess implements Action {
  readonly type = BookActionTypes.LoadAllSuccess;

  constructor(public payload: Book[]) {}
}

export type BookActions = Create | LoadAllSuccess;
