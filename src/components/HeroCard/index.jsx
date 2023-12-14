import React from 'react'

const HeroCard = ({ results }) => {
  return (
    <div className='show-card'>
        <div>
            <img src={results.image.url} alt="ola" />
        </div>
        <div>
            <div>{results.name}</div>
            <em>{results.alignment}</em>
        </div>
    </div>
  )
}

export default HeroCard

/* <div dangerouslySetInnerHTML={{__html: show.summary}}*/ 