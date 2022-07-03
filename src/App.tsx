import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FetchData, DisplayData } from './components/FetchData';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from './pages/Settings';
import QuestionScreen from './pages/QuestionScreen';
import ResultScreen from './pages/ResultScreen';
function App() {
  FetchData();

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Settings />
        </Route>
        <Route path="/questions">
          <QuestionScreen />
        </Route>
        <Route path="/results">
          <ResultScreen />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
