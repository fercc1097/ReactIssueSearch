import React, { useState } from "react";
import ResultItem from "../ResultItem";

const SearchBar = () => {
  const [results, setResults] = useState([]);

  async function handleChange(param) {
    try {
      if (param) {
        const url = `https://api.github.com/search/issues?q=repo:facebook/react+${param}:in:title`;
        const rawResponse = await fetch(url);
        const response = await rawResponse.json();
        setResults(response.items);
      }
    } catch (e) {
      setResults([]);
    }
  }

  return (
    <div className="searchBar">
      <input
        className="searchBar--Input"
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        placeholder="Please search an issue..."
        type="text"
      />
      {results.length && results.length >= 1 ? (
        <ul className="resultsList">
          {results.length >= 1
            ? results.map((issue, index) => {
                return <ResultItem key={index} issue={issue} />;
              })
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;
