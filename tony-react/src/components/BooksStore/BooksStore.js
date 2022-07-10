import React from 'react';

import BookForm from './BookForm';
import BookList from './BookList';

export default function BooksStore() {
  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  )
}