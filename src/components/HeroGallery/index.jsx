import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

import { GalleryImage } from '..'

const HeroGallery = () => {

    const [heros, setHeros] = useState([])

    useEffect(() => {
        const displayHeros = async () => {
            const {data} = await axios.get("https://superheroapi.com/api/2859083194232848")
            console.log(data)
            setHeros(data)
        }
        displayHeros()
 } ,[])

  return (
    <div className="heros">
        {heros.map(hero => (
            <Link to={`${hero.id}`} key={hero.id}>
                <GalleryImage hero={hero} />
            </Link>
        ))}
        </div>
  )
}

export default HeroGallery