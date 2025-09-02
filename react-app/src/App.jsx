import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS ={
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}

const App = () => {



const [searchTerm, setSearchTerm] = useState('')

const [errorMessage, setErrorMessage] =useState('')

const fetchMovies = async () => {
  try {
    if (!API_KEY || API_KEY === 'your_api_key_here') {
      throw new Error('TMDB API key is missing. Please add your API key to the .env file');
    }
    
    const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error fetching movies: ${error}`);
    setErrorMessage(`Error fetching movies: ${error.message}`);
  }
};

useEffect(() => {
  fetchMovies();
}, []); // Add empty dependency array to prevent infinite loop

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero banner" />
          <h1>fint <span className="text-gradient">movies</span> you'll enjoy hasle free</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>

      </div>
    </main>
  );
};

export default App;