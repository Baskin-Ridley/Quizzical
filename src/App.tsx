import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FetchData, DisplayData } from './components/FetchData';


function App() {
  FetchData();

  return (
    <div className="App">
      <FetchData/>
      <DisplayData/>
    </div>
  );
}

export default App;
