import { Actions } from '@ngrx/effects';
import { Observable, of, ReplaySubject } from 'rxjs';

import {
  Load,
  LoadSuccess,
  BookCollectionActionTypes
} from '../actions/book-collection.actions';
import { BookCollectionEffects } from './book-collection.effects';

describe('(effect) book-collection', () => {
  describe('When a draft is saved successfully', () => {
    const loadAction = new ReplaySubject<Load>(1);
    loadAction.next(new Load());
    const actions$ = new Actions(loadAction);
    const service = stubBookDataService(of([]));
    const effects = new BookCollectionEffects(actions$, service);

    it('should yield a success notification', done => {
      effects.load.subscribe(action => {
        expect(action.type).toBe(BookCollectionActionTypes.LoadSuccess);
        done();
      });
    });
  });
});

function stubBookDataService(value: Observable<any>) {
  const service = jasmine.createSpyObj('books', ['getBooks']);

  service.getBooks.and.returnValue(value);

  return service;
}
