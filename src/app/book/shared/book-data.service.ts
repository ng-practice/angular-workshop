import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { APP_CONFIG_TOKEN, AppConfig } from '../../core/app.config';
import { Book } from '../models';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BookDataService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG_TOKEN) private _config: AppConfig
  ) {}

  getBooks(): Observable<Book[] | Error> {
    return this.http
      .get<Book[]>(`${this._config.apiEndpoint}/books`)
      .pipe(
        catchError(() =>
          throwError(
            new Error('Sorry, we are not able to load any books right now.')
          )
        )
      );
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this._config.apiEndpoint}/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this._config.apiEndpoint}/books`, book);
  }

  updateBook(isbn: string, book: Book): Observable<Book> {
    return this.http.patch<Book>(`${this._config.apiEndpoint}/${isbn}`, book);
  }

  removeBook(isbn: string): Observable<Book> {
    return this.http.delete<Book>(`${this._config.apiEndpoint}/${isbn}`);
  }
}
