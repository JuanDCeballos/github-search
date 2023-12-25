import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';

const Search = ({ setUserInfo, mode }) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);

  const API_URL = 'https://api.github.com';

  const fetchResults = async (query) => {
    try {
      const response = await fetch(`${API_URL}/users/${query}`);
      const json = await response.json();

      const returnedObj = {
        status: response.status,
        json: json,
      };

      setUserInfo(returnedObj);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (search) {
      fetchResults(query);
      setSearch((prevState) => !prevState);
    }
  }, [search]);

  return (
    <div className={`search search-${mode ? `Dark` : `Ligth`}`}>
      <div className='search-input'>
        <PiMagnifyingGlass className='search-icon' />
        <input
          className='input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search GitHub username...'
        />
      </div>
      <button
        onClick={() => setSearch((prevState) => !prevState)}
        className='btn'
      >
        Search
      </button>
    </div>
  );
};

export default Search;
