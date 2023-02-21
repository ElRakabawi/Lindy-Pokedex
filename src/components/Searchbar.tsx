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
          {/* <h1>Lindy Pokedex</h1> */}
          <input className="search-bar" placeholder="Chasing a Pokemon? Find it here." type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
          {/* <h1>Results</h1> */}
          <div className="wrapper">
            <div className="search-results">
              {pokemonMatches.length > 0 ? 
              <div className="pokemon-suggs">
                {pokemonMatches.slice(0, 13).map((pokemon: any, i: any) => 
                  <div className="pokemon-item" onClick={() => openPokemon(i)} key={i}>{pokemon.name}</div>
                )}
              </div>
              : (<></>)}
            </div>
          </div>
      </div>
  )
})

export default Navbar