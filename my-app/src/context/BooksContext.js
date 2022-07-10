import React, { useReducer } from 'react';

export const BooksContext = React.createContext();

// types
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

// reducers
export const initialState = {
  books: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_BOOK: {
      return {
        ...state, // copy all property object
        books: [...state.books, action.payload]
      }
    }
    case DELETE_BOOK: {
      const newBooks = state.books.filter(book => book.id !== action.payload)
      return {
        ...state, // copy all property object
        books: newBooks
      }
    }
    default:
      return state
  }
}

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { books } = state;

  function addBook(title) {
    const newBook = {
      id: Date.now(),
      title,
      price: Date.now() 
    }
    dispatch({ 
      type: ADD_BOOK,
      payload: newBook
    })
  }

  function handleDeleteBook(bookId) {
    dispatch({ 
      type: DELETE_BOOK,
      payload: bookId
    })
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        addBook,
        handleDeleteBook
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}