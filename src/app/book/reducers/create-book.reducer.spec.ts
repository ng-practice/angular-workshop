import { G } from '../../test/g-rab';
import { BookPlan } from '../../test/plans/models/book.plan';
import { CreateBookSlicePlan } from '../../test/plans/slices/create-book.slice';
import { SaveDraftSuccess } from '../actions/create-book.actions';
import { Book } from '../models';
import { CreateBookSlice, reducer } from './create-book.reducer';

describe('reducer: create-book', () => {
  let slice: CreateBookSlice;
  let payload: Book;
  let action: SaveDraftSuccess;

  beforeEach(() => {
    slice = G.rab(CreateBookSlicePlan).model();
    payload = G.rab(BookPlan).model();
    action = new SaveDraftSuccess(payload);
  });

  describe('When a draft is saved', () => {
    it('should set the curren draft', () => {
      const state = reducer(slice, action);
      expect(state.draft.isbn).toBe(payload.isbn);
    });
  });

  describe('When a Draft is undone and a previous draft exist', () => {
    it('should set the current draft to the previous state');
  });

  describe('When a Draft is undone and no previous draft exist', () => {
    it('should yield an empty draft');
  });
});
