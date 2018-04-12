import { Actions } from '@ngrx/effects';
import { ReplaySubject, Observable, of } from 'rxjs';

import { _throw } from 'rxjs/observable/throw';

import {
  Load,
  BookCollectionActionTypes
} from '../actions/book-collection.actions';
import { BookDataService } from '../shared/book-data.service';
import { BookCollectionEffects } from './book-collection.effects';

describe('effect: book-collection', () => {
  let loadAction$: ReplaySubject<Load>;
  let actions$: Actions;
  let service: BookDataService;
  let effects: BookCollectionEffects;
  describe('When the books are loaded successfully', () => {

    beforeEach(() => {
      loadAction$ = new ReplaySubject(1);
      loadAction$.next(new Load());

      // First dep for effect
      actions$ = new Actions(loadAction$);

      // Second dep for effect
      service = stubBookDataService(of([]));

      effects = new BookCollectionEffects(actions$, service);
    });

    it('should yield a success action', done => {
      effects.load.subscribe(action => {
        expect(action.type).toBe(BookCollectionActionTypes.LoadSuccess);
        done();
      });
    });
  });

  describe('When an error is while loading the books', () => {
    beforeEach(() => {
      loadAction$ = new ReplaySubject(1);
      loadAction$.next(new Load());

      // First dep for effect
      actions$ = new Actions(loadAction$);

      // Second dep for effect
      service = stubBookDataService(_throw(new Error()));

      effects = new BookCollectionEffects(actions$, service);
    });

    it('should yield a LoadError Action', done => {
      effects.load.subscribe(action => {
        expect(action.type).toBe(BookCollectionActionTypes.LoadError);
        done();
      });
    });
  });
});

function stubBookDataService(result: Observable<any>) {
  const service = jasmine.createSpyObj('bookService', ['getBooks']);

  service.getBooks.and.returnValue(result);

  return service;
}
