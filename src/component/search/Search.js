import { useState } from 'react';
import './search.css';

const Search = ({ onSearchChange }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(e.target[0].value);

    setValue('');
  };

  return (
    <div className="formSearch">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a City"
          value={value}
        />
      </form>
    </div>
  );
};

export default Search;
