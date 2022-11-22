import axios from "axios";
import React, {createContext, useState} from 'react';

export const MovieContext = createContext({});

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/")
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  });

  const [genres, setGenres] = useState(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/")
      .then((response) => setGenres(response.data))
      .catch((err) => console.log(err));
  });

  const [selected, setSelected] = useState();

  return (
    <MovieContext.Provider
      value={{
        movies,
        genres,
        selected,
        setSelected,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

