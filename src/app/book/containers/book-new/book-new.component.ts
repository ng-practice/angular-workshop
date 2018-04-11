import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    this.form = new FormGroup({
      isbn:  new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      abstract: new FormControl('', Validators.required)
    }, { updateOn: 'blur' });

    this.form.valueChanges.subscribe(console.info);
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
