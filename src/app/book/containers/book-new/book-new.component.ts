import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Book } from 'models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CreateBook, RecoverDraftFromCache, SaveDraft } from '../../actions/create-book.actions';
import * as fromBook from '../../reducers';
import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();

  form: FormGroup;

  constructor(
    private _store: Store<fromBook.State>,
    private fb: FormBuilder,
    private bookService: BookDataService
  ) {
    this.form = this._declareForm();

    _store
      .pipe(
        takeUntil(this._onDestroy$),
        select(s => s.bookShelf.bookDraft.draft)
      )
      .subscribe(draft => this._fillForm(draft));
  }

  ngOnInit(): void {
    this._store.dispatch(new RecoverDraftFromCache());
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  saveDraft(draft: Book) {
    this._store.dispatch(new SaveDraft(draft));
  }

  private _declareForm() {
    return new FormGroup(
      {
        isbn: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
        abstract: new FormControl('', Validators.required)
      },
      { updateOn: 'blur' }
    );
  }

  private _fillForm(draft: Book) {
    this.form = new FormGroup(
      {
        isbn: new FormControl(draft.isbn, Validators.required),
        title: new FormControl(draft.title, Validators.required),
        author: new FormControl(draft.author, Validators.required),
        abstract: new FormControl(draft.abstract, Validators.required)
      },
      { updateOn: 'blur' }
    );
  }

  onSubmit() {
    const book: Book = {
      isbn: this.form.value.isbn,
      title: this.form.value.title,
      author: this.form.value.author,
      subtitle: '',
      abstract: this.form.value.abstract,
      numPages: 0,
      publisher: {
        name: '',
        url: ''
      }
    };

    this._store.dispatch(new CreateBook(book));
    this.form.reset();
  }
}
