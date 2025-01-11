import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from './book.args';
import { resolveReadonlyArrayThunk } from 'graphql';
import { BookEntity } from './book.entity';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks() {
    // return books
    const arr: any = [
      {
        id: 1,
        title: 'Haka',
        price: 100,
      },
      {
        id: 2,
        title: 'Muka',
        price: 200,
      },
      {
        id: 3,
        title: 'Booka',
        price: 300,
      },
      {
        id: 4,
        title: 'Lama',
        price: 400,
      },
    ];
    return this.bookService.showAllBooks();
  }

  @Query((returns) => Book, { name: 'findBookById' })
  findBookById(
    @Args({ name: 'BookId', type: () => Int }) id: number,
  ): BookEntity {
    return this.bookService.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): string {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'BookId', type: () => Int }) id: number,
    @Args('addBookArgs') updateBookArgs: AddBookArgs,
  ): string {
    return this.bookService.updateBook(id, updateBookArgs);
  }

  @Mutation((returns) => String, { name: 'deleteBook' })
  deleteBook(@Args({ name: 'BookId', type: () => Int }) id: number): string {
    return this.bookService.deleteBook(id);
  }
}
