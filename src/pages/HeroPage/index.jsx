import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

import { HeroCard } from '../../components'



const HeroPage = () => {
  const [results, setResults] = useState({ image: {}})
  const { id } = useParams()

  useEffect(() => {
    const displayHero = async () => {
      const { data } = await axios.get(`https://superheroapi.com/api.php/2859083194232848/1`)
      console.log(data)
      setResults(data)
    }
    displayHero()
  }, [])
 
  return (
    
   <HeroCard results={results} />
    
  )
}

export default HeroPage