import React from 'react'

const HeroCard = ({ show }) => {
  return (
    <div className='show-card'>
        <div>
            <img src={show.image.medium} alt={show.name} />
        </div>
        <div>
            <div>{show.rating.average ? <span>{show.rating.average}/10</span> :""}</div>
            <h2>{show.name}</h2>
            <em>{show.language}, {show.premiered}</em>
            <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
        </div>
    </div>
  )
}

export default HeroCard

/* <div dangerouslySetInnerHTML={{__html: show.summary}}*/ 