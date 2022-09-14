import React, { useEffect, useState } from 'react'
import './App.css';
import { topStories, fetchResponse } from './apiCalls'
import AllStoriesList from './AllStoriesList'
import Details from './Details'
import Error from './Error'
import FilterBtns from './FilterBtns.js'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

function App() {

  const [allStories, setAllStories] = useState([])
  const [sectionStories, setSectionStories] = useState('home')
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('rendered')
    fetchResponse(sectionStories)
      .then(data => setAllStories(data.results))
      .catch(error => setError(error))
  }, [sectionStories])


  return (
    <div className="App">
    {error ? <Error /> : 
      <div>
        <header className="App-header">
          <h1>New York Times Top Stories</h1>
        </header>
        
        <Route exact path='/'>
          <FilterBtns />
          {allStories && <AllStoriesList stories={allStories}/>}
        </Route>

        <Route exact path='/section/:section' render={({ match }) => {
          setSectionStories(match.params.section)
          return (
            <div>
              <FilterBtns />
              {allStories && <AllStoriesList stories={allStories}/>}
            </div>
          )
        }}/>
          
        
        <Route exact path="/:published_date" render={({ match }) => {
          console.log('here')
          return (
          <div>
            {allStories && <Details pubDate={match.params.published_date} allStories={allStories}/>}
          </div>
          )
        }}/>
      </div>
      }
     </div>
  )
}

export default App;

App.propTypes = {
  allStories: PropTypes.array,
  sectionStories: PropTypes.string,
  error: PropTypes.string
}
