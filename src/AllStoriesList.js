import React from 'react'
import './AllStoriesList.css'
import StoryPreview from './StoryPreview'

function AllStoriesList({ allStories }) {

  const createPreviews = allStories.map(story => <StoryPreview story={story} />)

 return (
  <div>
    {createPreviews}
  </div>
 )
}

export default AllStoriesList