import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FetchData, DisplayData } from './components/FetchData';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from './pages/Settings';
import QuestionScreen from './pages/QuestionScreen';
import ResultScreen from './pages/ResultScreen';



function App() {
  console.log("Hi")

  return (
    
    <Router>
      
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/question" element={<QuestionScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        
    </Router>
  );
}

export default App;
