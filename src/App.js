import React from 'react'
import { PokeProvider } from './context/index'
import Home from './components/Home'

export default function App() {
  return (
    <PokeProvider>
      <Home />
    </PokeProvider>
  )
};
