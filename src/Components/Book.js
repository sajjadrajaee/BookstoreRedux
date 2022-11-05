import React from 'react';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { bookProps } = props;
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{bookProps.title}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{bookProps.author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Book;
