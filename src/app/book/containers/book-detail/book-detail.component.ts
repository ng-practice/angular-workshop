import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from '../../models';
import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'book-detail',
  templateUrl: 'book-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) =>
        this.bookService.getBookByIsbn(params.isbn)
      )
    );
  }
}
