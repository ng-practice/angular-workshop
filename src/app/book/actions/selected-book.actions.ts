import { Action } from '@ngrx/store';
import { Book } from 'models';

export enum SelectedBookActionTypes {
  Draft = '[Book] New Draft created',
  UndoDraft = '[Book] Undo last Draft',
  Load = '[Book] Load single book',
  LoadSuccess = '[Book] Load single Book succeeded'
}

export class Draft implements Action {
  readonly type = SelectedBookActionTypes.Draft;

  constructor(public payload: Book) {}
}

export class UndoDraft implements Action {
  readonly type = SelectedBookActionTypes.UndoDraft;
}

export class Load implements Action {
  readonly type = SelectedBookActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = SelectedBookActionTypes.LoadSuccess;

  constructor(public payload: Book) {}
}

export type SelectedBookActions = Draft | UndoDraft | Load | LoadSuccess;
