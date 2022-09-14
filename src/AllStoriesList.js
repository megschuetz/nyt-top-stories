import React from 'react'
import './AllStoriesList.css'
import StoryPreview from './StoryPreview'
import PropTypes from 'prop-types'

function AllStoriesList({ stories }) {

  const createPreviews = stories.map(story => <StoryPreview key={story.title} story={story} />)

 return (
  <div className='previews-container'>
    {createPreviews}
  </div>
 )
}

export default AllStoriesList

AllStoriesList.propType = {
  stories: PropTypes.array
}