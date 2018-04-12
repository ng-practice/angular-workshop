import { Actions } from '@ngrx/effects';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { Load, LoadSuccess } from '../actions/book-collection.actions';
import { BookCollectionEffects } from './book-collection.effects';

describe('(effect) book-collection', () => {
  describe('When a draft is saved successfully', () => {
    const actions$ = new Actions(hot('-a-', { a: new Load() }));
    const service = stubBookDataService(of([]));
    const effects = new BookCollectionEffects(actions$, service);

    it('should yield a success notification', () => {
      expect(effects.load).toBeObservable(
        hot('-a-', { a: new LoadSuccess([]) })
      );
    });
  });
});

function stubBookDataService(value: Observable<any>) {
  const service = jasmine.createSpyObj('books', ['getBooks']);

  service.getBooks.and.returnValue(value);

  return service;
}
