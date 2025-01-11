import { Injectable } from '@nestjs/common';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  bookArray: BookEntity[] = [
    {
      id: 1,
      title: 'Haka',
      price: 100,
    },
  ];

  showAllBooks(): BookEntity[] {
    return this.bookArray;
  }

  findBookById(id: number): BookEntity {
    const bookOReturn = this.bookArray.filter((book) => book.id == id)[0];
    console.log(bookOReturn);
    return bookOReturn;
  }

  addBook(book: BookEntity): string {
    this.bookArray.push(book);
    return 'Book is added successfully';
  }

  updateBook(id: number, updateBook: BookEntity): string {
    for (let i = 0; i < this.bookArray.length; i++) {
      if (this.bookArray[i].id == id) {
        this.bookArray[i] = updateBook;
      }
    }
    return 'Book is updated successfully';
  }

  deleteBook(id: number): string {
    this.bookArray = this.bookArray.filter((book) => book.id != id);
    return 'Book is deleted successfully';
  }
}
