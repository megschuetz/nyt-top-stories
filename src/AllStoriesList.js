import React, { useEffect, useState } from 'react'
import './AllStoriesList.css'
import StoryPreview from './StoryPreview'
import PropTypes from 'prop-types'
import { fetchResponse } from './apiCalls'

function AllStoriesList({ stories }) {

  // const [category, setCategory] = useState([])
  // const [error, setError] = useState('')

  // useEffect(() => {
  //   if(section) {
  //     console.log('stories updated')
  //     fetchResponse(section)
  //       .then(data => setCategory(data.results))
  //       .catch(error => setError(error))
  //   } else {
  //     console.log('stories', stories)
  //     setCategory(stories)
  //   }
  // }, [])


  const createPreviews = stories.map((story) => {
      if(story.section !== 'admin') {
        return <StoryPreview key={story.title} story={story} />
      }
  })
 

 return (
  <div className='previews-container'>
    {createPreviews}
  </div>
 )
}

export default AllStoriesList

AllStoriesList.propType = {
  stories: PropTypes.array,
  section: PropTypes.string
}