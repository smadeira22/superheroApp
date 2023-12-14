import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { HeroList } from '../'

const SearchWidget = () => {
    const [inputValue,setInputValue ] = useState("")
    const [searchString, setSearchString] = useState("")
    const [heroData, setHeroData]= useState([])

    const handleInput = (e) => {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue("")
    }
    useEffect(() => {
        const searchAPI = async () => {
            const { data } = await axios.get(`https://superheroapi.com/api.php/2859083194232848/search/${searchString}`)
            const heros = data.map(s => s.hero)
            setHeroData(heros)
        }
        searchAPI()
    }, [searchString])
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} required />
        <input type="submit" value="Search" />
    </form>
    <HeroList heroData={heroData}/>
    </>
  )
}

export default SearchWidget