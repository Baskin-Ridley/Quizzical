import React from 'react';
import yellowBlob from "./assets/blobs1.svg";
import blueBlob from "./assets/blobs2.svg";
import './App.css';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
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
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="topRightCircle">
          <img src={yellowBlob} alt="yellow blob" />
        </div>
        <div className="bottomLeftCircle">
          <img src={blueBlob} alt="blue blob" />
        </div>
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/questions" element={<QuestionScreen />} />
              <Route path="/results" element={<ResultScreen />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
