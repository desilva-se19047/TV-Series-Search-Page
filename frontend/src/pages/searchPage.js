import React, { useState} from 'react';
import './searchPage.css';
import Fuse from 'fuse.js';
const searchData = require("../resources/data.json");

const options = {
  keys: ['shows'],
  includeScore: true, // Include score to rank results by relevance
  threshold: 0.8, // Adjust the threshold based on preference
};

function SearchPage() {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = () => {
    // Update search results based on the API response
    const fuse = new Fuse(searchData.shows.map(show => ({ shows: show })), options);
    const results = fuse.search(value).map(result => result.item.shows);
    setSearchResults(results);
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    
    <div className="search-page-container">
      <div className="app-container">
        <h1>Search TV Series</h1>
      </div>
      <div className="search-container">
        <input type="text" onChange={onInputChange} value={value} />
        <button onClick={onSearch}>Search</button>
      </div>
      <div className="results-container">
        {searchResults.length > 0 && (
          <div>
            <h2>Results:</h2>
            <ul>
              {searchResults.slice(0, 3).map((show, index) => (
                <div className="results" key={index}>
                  {show}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;



//https://cheatcode.co/tutorials/how-to-implement-client-side-search-with-fuse-js
