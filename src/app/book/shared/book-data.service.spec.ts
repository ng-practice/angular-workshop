import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';

import { BookDataService } from './book-data.service';
import { ProvideAppConfig, APP_CONFIG_TOKEN, AppConfig } from '../../core/app.config';

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
    it('yields a list of books', fakeAsync(() => {
      // Pending request
      service.getBooks().subscribe(books => expect(books.length).toBe(0));

      // Mock response
      httpMock
        .expectOne(`${config.apiEndpoint}/books`)
        .flush([]);
    }));
  });

  afterEach(() => httpMock.verify());
});
