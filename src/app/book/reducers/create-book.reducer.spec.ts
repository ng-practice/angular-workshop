import { G } from '../../test/g-rab';
import { BookPlan } from '../../test/plans/models/book.plan';
import { CreateBookSlicePlan } from '../../test/plans/slices/create-book.slice';
import { SaveDraftSuccess } from '../actions/create-book.actions';
import { Book } from '../models';
import { CreateBookSlice, reducer } from './create-book.reducer';

describe('(reducer) create-book', () => {
  describe('Saving a draft', () => {
    let slice: CreateBookSlice;
    let payload: Book;
    let action: SaveDraftSuccess;

    beforeEach(() => {
      slice = G.rab(CreateBookSlicePlan).model();
      payload = G.rab(BookPlan).model({ title: 'Ein Kurs in Wundern' });
      action = new SaveDraftSuccess(payload);
    });

    it('should set the current draft', () => {
      const state = reducer(slice, action);
      expect(state.draft.isbn).toBe(payload.isbn);
    });

    it('should add an entry to the past drafts', () => {
      const state = reducer(slice, action);
      expect(state.pastDrafts.length).toBe(1);
    });
  });
});
