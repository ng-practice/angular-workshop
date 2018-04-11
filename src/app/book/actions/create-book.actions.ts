import { Action } from '@ngrx/store';
import { Book } from 'models';

export enum CreateBookActionTypes {
  SaveDraft = '[CREATE BOOK] Save draft locally',
  SaveDraftSuccess = '[CREATE BOOK] Save draft locally succeeded',
  RemoveDraft = '[CREATE BOOK] Remove draft',
  RecoverDraftFromCache = '[CREATE BOOK] Recover Draft from Cache',
  RecoverDraftFromCacheSuccess = '[CREATE BOOK] Draft successfully recovered',
  UndoDraft = '[CREATE BOOK] Undo last draft',
  CreateBook = '[CREATE BOOK] Save new Book'
}

export class UndoDraft implements Action {
  readonly type = CreateBookActionTypes.UndoDraft;
}

export class SaveDraft implements Action {
  readonly type = CreateBookActionTypes.SaveDraft;

  constructor(public payload: Book) {}
}

export class SaveDraftSuccess implements Action {
  readonly type = CreateBookActionTypes.SaveDraftSuccess;

  constructor(public payload: Book) {}
}

export class RemoveDraft implements Action {
  readonly type = CreateBookActionTypes.RemoveDraft;
}

export class RecoverDraftFromCache implements Action {
  readonly type = CreateBookActionTypes.RecoverDraftFromCache;
}

export class RecoverDraftFromCacheSuccess implements Action {
  readonly type = CreateBookActionTypes.RecoverDraftFromCacheSuccess;

  constructor(public payload: Book) {}
}

export class CreateBook implements Action {
  readonly type = CreateBookActionTypes.CreateBook;

  constructor(public payload: Book) {}
}

export type CreateBookActions =
  | SaveDraft
  | SaveDraftSuccess
  | RemoveDraft
  | RecoverDraftFromCache
  | RecoverDraftFromCacheSuccess
  | CreateBook
  | UndoDraft;
