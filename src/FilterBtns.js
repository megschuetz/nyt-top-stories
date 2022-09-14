import React from 'react'
import './Filters.css'
import { NavLink } from 'react-router-dom';

function FilterBtns() {

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'] 
  
  const sectionsLinks = sections.map((section) => {
    return (
      <NavLink to={`/section/${section}`} style={{textDecoration: 'none', color: 'black'}} key={section}><button className='section-name'>{section}</button></NavLink>
    )
  })
  
  return (
    <section className='filters-section'>
      <div className='filters-container'>
        {sectionsLinks}
      </div>
    </section>
  )
}

export default FilterBtns