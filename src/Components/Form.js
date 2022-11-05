import React from 'react';

function Form() {
  return (
    <>
      <input type="input" placeholder="Book title" />
      <select name="authors" placeholder="Authors">
        <option value="1">Author 1</option>
      </select>
      <button type="submit">Add Book</button>
    </>
  );
}

export default Form;
