import { Action } from '@ngrx/store';
import { Book } from 'models';

export enum SelectedBookActionTypes {
  Load = '[Book] Load',
  LoadSuccess = '[Book] Load single Book succeeded'
}

export class Load implements Action {
  readonly type = SelectedBookActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = SelectedBookActionTypes.LoadSuccess;

  constructor(public payload: Book) {}
}

export type SelectedBookActions = Load | LoadSuccess;
