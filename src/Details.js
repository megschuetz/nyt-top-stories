import React from 'react'
import './Details.css'

function Details({ pubDate, allStories }) {

  const singleStory = allStories.find(story => story.published_date === pubDate)

  return (
    <section className='details'>
      <p className='title'>{singleStory.title}</p>
      <p className='byline'>{singleStory.byline}</p>
      <p className='section'>{singleStory.section}</p>
      {singleStory.subsection && <p className='subsection'>{singleStory.subsection}</p>}
      <p>{singleStory.abstract}</p>
      {singleStory.multimedia[0].url && <img src={singleStory.multimedia[0].url}/>}
    </section>
  )
}

export default Details