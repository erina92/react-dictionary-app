import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  // we set to null or empty
  // so that if it has something it will return something

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation for dictionary api https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="search">
      <div className="search-container">
        <section>
          <form onSubmit={search}>
            <label>What word do you want to look up?</label>
            <input
              type="search"
              className="search-input"
              placeholder="Search for a word"
              required
              onChange={handleKeywordChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </section>
      </div>
      <Results results={results} />
    </div>
  );
}
