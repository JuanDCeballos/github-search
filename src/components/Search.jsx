import { useEffect, useState } from 'react';

const Search = ({ setUserInfo }) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);

  const API_URL = 'https://api.github.com';
  const sizas = 'JuanDCeballos';

  const fetchResults = async (query) => {
    try {
      const response = await fetch(`${API_URL}/users/${query}`);
      const json = await response.json();
      setUserInfo(json);
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
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setSearch((prevState) => !prevState)}>
        Search
      </button>
    </>
  );
};

export default Search;
