import axios from "axios";
import React, {createContext, useState} from 'react';

export const PokeContext = createContext({});

export const PokeProvider = (props) => {
  const [pokes, setPokes] = useState(() => {
    axios
      .get("https://driven-pokemons.herokuapp.com/pokemons")
      .then((response) => setPokes(response.data))
      .catch((err) => console.log(err));
  });

  const [selected, setSelected] = useState();

  return (
    <PokeContext.Provider
      value={{
        pokes,
        setPokes,
        selected,
        setSelected,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

