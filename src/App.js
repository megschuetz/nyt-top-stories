import React, { useEffect, useState } from 'react'
import './App.css';
import {allData} from './apiCalls'
import AllStoriesList from './AllStoriesList'
import { Route } from 'react-router-dom'

function App() {

  const [allStories, setAllStories] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    allData
      .then(data => setAllStories(data.results))
      .catch(error => setError(error))

      console.log('allstories', allStories)
  })

  return (
    <div className="App">
      <header className="App-header">
       <h1>New York Times Top Stories</h1>
      </header>
      
      <Route exact path='/'>
        {allStories && <AllStoriesList allStories={allStories}/>}
      </Route>
    </div>
  );
}

export default App;
