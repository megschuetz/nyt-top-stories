import React from 'react'
import './StoryPreview.css'
import {Link} from 'react-router-dom'

function StoryPreview({ story }) {
  return (
    <Link to={`/${story.published_date}`} style={{textDecoration: 'none', color: 'black'}}>
      <div className='preview-box'>
        <h2>{story.title}</h2>
        <p>{story.byline}</p>
        <p>{story.abstract}</p>
      </div>
    </ Link>
  )
}

export default StoryPreview