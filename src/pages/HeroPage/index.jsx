import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

import { HeroCard } from '../../components'

const HeroPage = () => {
  const [hero, setHero] = useState({ image: {}})
  const { id } = useParams()
  useEffect(() => {
    const displayHero = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
      setHero(data)
    }
    displayHero()
  }, [])
 
  return (
    
   <HeroCard hero={hero} />
    
  )
}

export default HeroPage