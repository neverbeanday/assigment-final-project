import React, { useState } from 'react';

// styles
import './Search.scss';

const Search = (props) => {
  const [keyword, setKeyword] = useState('');

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const searchFunction = (e) => {
    e.preventDefault();
    props.search(keyword);
  };

  return (
    <form className='search-container'>
      <input
        type='text'
        id='search'
        className='search'
        placeholder='Search...'
        onChange={handleInput}
      />

      <input
        className='button-search'
        onClick={searchFunction}
        type='submit'
        value='Search'
      />
    </form>
  );
};

export default Search;
