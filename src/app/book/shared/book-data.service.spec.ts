import { TestBed, fakeAsync } from '@angular/core/testing';
import { BookDataService } from './book-data.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ProvideAppConfig } from '../../core/app.config';

describe('(service) BookData', () => {
  let service: BookDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataService, ProvideAppConfig]
    });

    service = TestBed.get(BookDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('When books are loaded successfully', () => {
    it(
      'should yield a list of books',
      fakeAsync(() => {
        service.getBooks().subscribe(books => expect(books.length).toBe(0));

        httpMock
          .expectOne('http://localhost:4730/books')
          .flush([]);
      })
    );
  });
});
