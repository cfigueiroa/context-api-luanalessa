import React from 'react';
import { MovieProvider } from './context/index';
import Home from './components/Home';

function App() {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}

export default App;