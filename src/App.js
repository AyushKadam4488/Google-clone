import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          {/* </Route> */}
          <Route path="/" element={<Home />} /> 
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
