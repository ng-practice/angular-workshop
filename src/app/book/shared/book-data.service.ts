import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from 'models';

@Injectable()
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books', book);
  }

  updateBook(isbn: string, book: Book): Observable<Book> {
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, book);
  }

  removeBook(isbn: string): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:4730/books/${isbn}`);
  }
}
