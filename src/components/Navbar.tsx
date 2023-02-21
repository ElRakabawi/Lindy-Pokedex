import { FC, useEffect, useState } from "react"
import { POKEAPI_BASE
 } from "../constants"
import { useNavigate } from "react-router-dom"
const Navbar: FC<Record<string, never>> = (() => {
  const navigate = useNavigate()
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonMatches, setPokemonMatches] = useState([])

  useEffect(() => {
    fetch(`${POKEAPI_BASE}/pokemon?limit=1300&offset=0`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results)
      })
  }, [])

  useEffect( () => {
    pokemonName === '' ? setPokemonMatches([]) :
    setPokemonMatches(pokemonList.filter((pokemon: any) => pokemon.name.includes(pokemonName)))
  }, [pokemonName])

  const openPokemon = (i: any) => {
    navigate(`/pokemon/${i+1}`)
    setPokemonName('')
  }

  return(
      <div className="navbar">
          <h1>Lindy Pokedex</h1>
          <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
          <h1>Results</h1>
          <ul>
            {pokemonMatches.map((pokemon: any, i: any) => 
              <li onClick={() => openPokemon(i)} key={i}>{pokemon.name} : {i}</li>
            )}
          </ul>
      </div>
  )
})

export default Navbar