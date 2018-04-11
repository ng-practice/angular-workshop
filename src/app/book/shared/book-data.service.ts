import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Book } from 'models';
import { Observable } from 'rxjs';

import { APP_CONFIG_TOKEN, AppConfig } from '../../core/app.config';

@Injectable()
export class BookDataService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG_TOKEN) private _config: AppConfig
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this._config.apiEndpoint}/books`);
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
