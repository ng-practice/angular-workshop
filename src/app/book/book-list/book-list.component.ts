import { Component, OnInit } from '@angular/core';
import { Book } from 'models';
import { BookDataService } from '../shared/book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookService: BookDataService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}
