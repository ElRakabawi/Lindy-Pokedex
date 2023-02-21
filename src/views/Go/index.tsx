import { useState, useEffect } from 'react'
import { POKEAPI_BASE } from '../../constants'

function Go() {
  const [pokemonName, setPokemonName] = useState('')

  const goPokemon = (event: any) => {
    event.preventDefault()
    fetch(`${POKEAPI_BASE}/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }

  const handleChange = (event: any) => {
    setPokemonName(event.target.value)
  }

  return (
    <div className="App">
      <h1>Get pokemon by name</h1>
      <form onSubmit={goPokemon}>
        <label>
          Name:
          <input type="text" value={pokemonName} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default Go
