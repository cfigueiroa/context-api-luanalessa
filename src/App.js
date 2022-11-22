import React from 'react';
import { PokeProvider } from './context/index';
import Home from './components/Home';

function App() {
  return (
    <PokeProvider>
      <Home />
    </PokeProvider>
  );
}

export default App;