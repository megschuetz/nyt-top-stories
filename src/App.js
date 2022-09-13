import React, { useEffect, useState } from 'react'
import './App.css';
import allData from 'apiCalls.js'

function App() {

  const [allStories, setAllStories] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    allData
      .then(data => setAllStories(data))
      .catch(error => setError(error))

      console.log('allstories', allStories)
  });

  return (
    <div className="App">
      <header className="App-header">
       <h1>New York Times Top Stories</h1>
      </header>

    </div>
  );
}

export default App;
