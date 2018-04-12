import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import { Book } from '../../models';
import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: { isbn: string }) =>
          this.bookService.getBookByIsbn(params.isbn)
        )
      )
      .subscribe(book => (this.book = book));
  }

  onSubmit(value) {
    this.bookService
      .updateBook(this.book.isbn, value)
      .subscribe((book: Book) => console.log('Book updated', book));
  }
}
