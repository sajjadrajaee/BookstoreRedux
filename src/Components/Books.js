import React from 'react';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = [{
    id: 1,
    name: 'ABC',
    author: 'Messi',
  }, {
    id: 2,
    name: 'MNO',
    author: 'DID',
  }];
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
      <hr />
      <Form />
    </>
  );
}

export default Books;
