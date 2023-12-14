import React from 'react';

const HeroCard = ({ results }) => {
  return (
    <div className='show-card'>
      <div>
      <img src={results.image.url} alt="Superhero profile picture of {results.name}" />
      </div>
      <div>
        <div>Name: {results.name}</div>
        <div>Gender: {results.appearance && <span>{results.appearance.gender}</span>}</div>
        <div>Race: {results.appearance && <span>{results.appearance.race}</span>}</div>
        <div>Alignment: {results.biography && <span>{results.biography.alignment}</span>}</div>
        <div>Publisher: {results.biography && <span>{results.biography.publisher}</span>}</div>
        <div>First Appearance: {results.biography && <span>{results.biography["first-appearance"]}</span>}</div>
      </div>
    </div>
  );
};

export default HeroCard;

/* <div dangerouslySetInnerHTML={{__html: show.summary}}*/ 