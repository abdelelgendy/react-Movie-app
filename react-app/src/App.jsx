import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero banner" />
          <h1>fint <span className="text-gradient">movies</span> you'll enjoy hasle free</h1>

          <p></p>

        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
    </main>
  );
};

export default App;