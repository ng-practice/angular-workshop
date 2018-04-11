import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'models';

import { BookDataService } from '../../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookDataService) {}

  ngOnInit() {
    this.form = this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      abstract: ['', Validators.required]
    });
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

    this.bookService
      .createBook(book)
      .subscribe();
  }
}
