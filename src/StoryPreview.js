import React from 'react'
import './StoryPreview.css'

function StoryPreview({ story }) {
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.abstract}</p>
    </div>
  )
}

export default StoryPreview