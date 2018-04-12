import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ZOMBIE_COMPILER_PROVIDERS } from 'ngx-zombie-compiler';
import { of } from 'rxjs';

import { G } from '../../../test/g-rab';
import { BookPlan } from '../../../test/plans/models/book.plan';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { Book } from '../../models';
import { BookDataService } from '../../shared/book-data.service';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookListComponent } from './book-list.component';

describe('component: BookList', () => {
  let book: Book;
  let bookListFixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookCardComponent, BookDetailComponent],
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path: ':isbn', component: BookDetailComponent }
        ])
      ],
      providers: [Location, { provide: BookDataService, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .configureCompiler({ providers: [ZOMBIE_COMPILER_PROVIDERS] })
      .compileComponents();

    book = G.rab(BookPlan).model();
    bookListFixture = TestBed.createComponent(BookListComponent);

    bookListFixture.componentInstance.books$ = of([book]);
    bookListFixture.detectChanges();
  });

  describe('When a details link is clicked', () => {
    it('should navigate to the details page', fakeAsync(() => {
      const detailsLink = bookListFixture.debugElement.query(By.css('[href]'));

      (detailsLink.nativeElement as HTMLAnchorElement).click();

      tick();

      expect(TestBed.get(Location).path()).toBe(`/${book.isbn}`);
    }));
  });
});
