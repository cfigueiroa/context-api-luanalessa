import { createContext } from 'react'
import { useState } from 'react';

export const PokeContext = createContext({})

export const PokeProvider = (props) => {
  const [selected, setSelected] = useState(false)
  const [pokes, setPokes] = useState([{ name: "Bulbasaur", type: "Grass" }, { name: "Charmander", type: "Fire" }, { name: "Squirtle", type: "Water" }]
  )

  return (
    <PokeContext.Provider value={{ selected, setSelected, pokes, setPokes }}>
      {props.children}
    </PokeContext.Provider>
  )
}
