import React, { Fragment, useContext } from 'react';

import { BooksContext } from '../../context/BooksContext';

export default function BookList() {
  const { books, handleDeleteBook } = useContext(BooksContext);

  return (
    <div>
      <h5>Books Lists</h5>
      {books.length > 0 ? (
        <>
          {books.map((book, idx) => (
            <Fragment key={book.id}>
              <div>
                Title: {book.title} <br />
                Price: {book.price}
                <button type="button" onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </div>
              <br />
            </Fragment>
          ))}
        </>
      ): <div>no data books</div>}
    </div>
  )
}