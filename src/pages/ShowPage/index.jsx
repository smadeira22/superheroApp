import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

import { ShowCard } from '../../components'

const ShowPage = () => {
  const [show, setShow] = useState({ image: {}, rating: {}})
  const { id } = useParams()
  useEffect(() => {
    const displayShow = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`)
      setShow(data)
    }
    displayShow()
  }, [])
 
  return (
    
   <ShowCard show={show} />
    
  )
}

export default ShowPage