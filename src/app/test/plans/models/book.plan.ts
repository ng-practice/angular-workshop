import { Book } from '../../../book/models';
import { Plan } from '../../g-rab';

export class BookPlan extends Plan<Book> {
  constructor() {
    super({
      author: 'Simon Sinek',
      title: 'Start with why',
      subtitle: 'How leaders inspire great teams',
      isbn: '123-5435-23422-234',
      abstract: 'Please refer to the book',
      numPages: 294,
      publisher: {
        name: 'Simon himself',
        url: 'none'
      }
    });
  }
}
