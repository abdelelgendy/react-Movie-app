import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS ={
  method:'GET',
  headers:{
    accept:'application/json'
  }
}

const App = () => {
const [searchTerm, setSearchTerm] = useState('')
const [errorMessage, setErrorMessage] =useState('')
const [movieList,setMovieList] = useState([])
const [isLoading,setIsLoading] =useState(false)

const fetchMovies = async () => {

  setIsLoading(true);
  setErrorMessage('');
  try {
    if (!API_KEY || API_KEY === 'your_api_key_here') {
      throw new Error('TMDB API key is missing. Please add your API key to the .env file');
    }
    
    const endpoint = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (data.response === 'False'){
      setErrorMessage(data.Error ||   'failed to fetch movies')
      setMovieList([]);
      return;
    }
    setMovieList(data.results || []);
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
    setErrorMessage(`Error fetching movies: ${error.message}`);
  }finally{
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchMovies();
}, []); 

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero banner" />
          <h1>find <span className="text-gradient">movies</span> you'll enjoy hasle free</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ):errorMessage?(
            <p className="text-red-500">{errorMessage}</p>
          ):(
            <ul>
              {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>

              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  );
};

export default App;