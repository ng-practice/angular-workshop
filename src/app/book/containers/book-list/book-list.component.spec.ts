import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
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
import { By } from '@angular/platform-browser';
import { CommonModule, Location } from '@angular/common';

describe('(component) BookList', () => {
  const book = G.rab(BookPlan).model({ isbn: '234-24-32' });

  let bookListFixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookCardComponent, BookDetailComponent],
      imports: [
        CommonModule,
        StoreModule.forRoot({
          ...reducers,
          feature: combineReducers(bookReducers)
        }),
        RouterTestingModule.withRoutes([
          { path: ':isbn', component: BookDetailComponent }
        ])
      ],
      providers: [
        Location,
        {
          provide: BookDataService,
          useFactory() {
            return {
              getBooks() {
                return of([book]);
              },
              getByIsbn() {
                return of(book);
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
    bookListFixture.componentInstance.books$ = of([book]);
    bookListFixture.detectChanges();
  });

  describe('When clicking on a details link', () => {
    it('should navigate to the details page', fakeAsync(() => {
      const detailLink = bookListFixture.debugElement.query(By.css('[href]'));

      detailLink.nativeElement.click();

      tick();

      expect(TestBed.get(Location).path()).toBe(`/${book.isbn}`);
    }));
  });
});
