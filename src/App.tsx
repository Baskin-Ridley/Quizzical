import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from './pages/Settings';
import QuestionScreen from './pages/QuestionScreen';
import ResultScreen from './pages/ResultScreen';
import store from './redux/store';



function App() {
  
  store.subscribe(() => {
    const newState = store.getState();
    console.log("updated state in store", newState);
});
  return (
    
    <Router>
      <div className="App">
        
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/questions" element={<QuestionScreen />} />
              <Route path="/results" element={<ResultScreen />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
