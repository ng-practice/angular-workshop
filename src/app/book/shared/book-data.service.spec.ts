import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';

import {
  APP_CONFIG_TOKEN,
  AppConfig,
  ProvideAppConfig
} from '../../core/app.config';
import { Book } from '../models';
import { BookDataService } from './book-data.service';

describe('service: BookData', () => {
  let service: BookDataService;
  let httpMock: HttpTestingController;
  let config: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataService, ProvideAppConfig]
    });

    service = TestBed.get(BookDataService);
    config = TestBed.get(APP_CONFIG_TOKEN);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('When books are loaded succesfully', () => {
    it(
      'yields a list of books',
      fakeAsync(() => {
        // Pending request
        service
          .getBooks()
          .subscribe((books: Book[]) => expect(books.length).toBe(0));

        // Mock response
        httpMock.expectOne(`${config.apiEndpoint}/books`).flush([]);
      })
    );
  });

  describe('When the API yields an error', () => {
    it(
      'should yield the error message "Sorry, we are not able to load any books right now."',
      fakeAsync(() => {
        service
          .getBooks()
          .subscribe(
            () => {},
            err =>
              expect(err.message).toBe(
                'Sorry, we are not able to load any books right now.'
              )
          );

        httpMock
          .expectOne(`${config.apiEndpoint}/books`)
          .error(new ErrorEvent('not found'), {
            statusText: 'An unexpected error occured!'
          });
      })
    );
  });

  afterEach(() => httpMock.verify());
});
