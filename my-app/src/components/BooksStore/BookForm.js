import React, { useState, useContext } from 'react';

import { BooksContext } from '../../context/BooksContext';

export default function BookForm() {
  const { addBook } = useContext(BooksContext);
  const [title, setTitle] = useState('')

  return (
    <div>
      Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button type="button" onClick={() => addBook(title)}>Add book</button>
    </div>
  )
}