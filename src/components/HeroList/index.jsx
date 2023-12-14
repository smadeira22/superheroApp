import React from 'react'
import { HeroCard } from '..'


const HeroList = ({heroData}) => {
  return (
    heroData.map((s) => (
        s.image? <HeroCard key={s.id} hero={s}/>: ""
     ))
  )
}

export default HeroList