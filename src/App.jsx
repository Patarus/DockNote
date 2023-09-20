import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CircleNotes from './components/CircleNotes/CircleNotes';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="circle-notes">
        <CircleNotes />
      </div>
     
    </div>
  );
}

export default App;
