import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
