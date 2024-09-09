import React, { useState } from "react";
import { moviesData } from "./getmovies/moviesData"

export default function App() {

  const [isMovies, setIsMovies] = useState([])

  const getMovies = () => {
    setIsMovies(moviesData)
  };

  return (
    <>
      <main>
        <h1>Dynamic Import Code Splitting</h1>
        <button onClick={getMovies}>Get Movies</button>
        <pre>
          {isMovies.length > 0 ? JSON.stringify(moviesData, null, 2) : ""}
          </pre>
      </main>
    </>
  );
}