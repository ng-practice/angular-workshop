import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { ZOMBIE_COMPILER_PROVIDERS } from 'ngx-zombie-compiler';
import { of } from 'rxjs';

import { reducers } from '../../../reducers';
import { G } from '../../../test/g-rab';
import { BookPlan } from '../../../test/plans/models/book.plan';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { reducers as bookReducers } from '../../reducers';
import { BookDataService } from '../../shared/book-data.service';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from './book-list.component';

describe('(component) BookList', () => {
  const isbn = '234-24-32';
  let bookListFixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookCardComponent, BookDetailComponent],
      imports: [
        StoreModule.forRoot({
          ...reducers,
          feature: combineReducers(bookReducers)
        }),
        RouterTestingModule.withRoutes([
          { path: 'books/:isbn', component: BookDetailComponent }
        ])
      ],
      providers: [
        {
          provide: BookDataService,
          useFactory() {
            return {
              getBooks() {
                return of([G.rab(BookPlan).model({ isbn })]);
              },
              getByIsbn() {
                return of(G.rab(BookPlan).model({ isbn }));
              }
            };
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .configureCompiler({
        providers: [ZOMBIE_COMPILER_PROVIDERS]
      })
      .compileComponents();

    bookListFixture = TestBed.createComponent(BookListComponent);
  });
  describe('When clicking on a details link', () => {
    it('should navigate to the details page', () => {});
  });
});
