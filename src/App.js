import React, { useEffect, useState } from 'react'
import './App.css';
import { allData } from './apiCalls'
import AllStoriesList from './AllStoriesList'
import Details from './Details';
import { Route } from 'react-router-dom'

function App() {

  const [allStories, setAllStories] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    allData
      .then(data => setAllStories(data.results))
      .catch(error => setError(error))

      // console.log('allstories', allStories)
  })

  return (
    <div className="App">
      <header className="App-header">
       <h1>New York Times Top Stories</h1>
      </header>
      
      <Route exact path='/'>
        {allStories && <AllStoriesList allStories={allStories}/>}
      </Route>

      <Route path="/:published_date" render={({ match }) => {
        return (
        <div>
          {allStories && <Details pubDate={match.params.published_date} allStories={allStories}/>}
        </div>
        )
        }}/>
    </div>
  );
}

export default App;
