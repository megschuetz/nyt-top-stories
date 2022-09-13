import React from 'react'
import './StoryPreview.css'

function StoryPreview({ story }) {
  return (
    <div className='preview-box'>
      <h2>{story.title}</h2>
      <p>{story.byline}</p>
      <p>{story.abstract}</p>
    </div>
  )
}

export default StoryPreview