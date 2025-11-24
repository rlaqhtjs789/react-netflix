
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./SearchPage.css";
import axios from '../../api/axios';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  },[searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(request.data.results);
      console.log('request', request);
    } catch (error) {
      console.log(error);     
    }
  }

  const renderSearchResults = () => {
    return (searchResults?.length ?? 0) > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie">
                <div className="movie__column-poster">
                  <img className="movie__poster" src={movieImageUrl} alt="movie image" />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자 하는 검색어 "{searchTerm}"에 대한 검색 결과가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <div>{renderSearchResults()}</div>
  )
}
