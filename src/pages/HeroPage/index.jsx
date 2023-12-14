import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { HeroCard } from '../../components';
import { HeroCard } from '../../components'



const HeroPage = () => {
  const [heroes, setHeroes] = useState([]);
  const { id } = useParams();

  const [results, setResults] = useState({ image: {}})
  const { id } = useParams()

  useEffect(() => {
    const displayHeroes = async () => {
      const heroIds = [1, 2, 3, 4, 5]; 
      const promises = heroIds.map(async (heroId) => {
        const { data } = await axios.get(`https://superheroapi.com/api.php/2859083194232848/${heroId}`);
        return data;
      });

      const heroData = await Promise.all(promises);
      setHeroes(heroData);
    };

    displayHeroes();
  }, []);

  return (
    <div>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} results={hero} />
      ))}
    </div>
  );
};

export default HeroPage;
