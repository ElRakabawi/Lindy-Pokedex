import { useState, useEffect } from 'react'
import { POKEAPI_BASE } from '../constants'
import { useNavigate } from 'react-router-dom'

function Go() {
  const navigate = useNavigate()
  const [pokemonName, setPokemonName] = useState('')

  const goPokemon = async (event: any) => {
    event.preventDefault()
    const pokemon = await fetch(`${POKEAPI_BASE}/pokemon/${pokemonName}`)
    pokemon.status === 200 ?
      pokemon.json().then((data) => {
        data.order ?
          navigate(`/pokemon/${data.order}`) :
          console.log('error.')
      }) :
      navigate('/pokemon404') 
  }

  const handleChange = (event: any) => {
    setPokemonName(event.target.value)
  }

  return (
    <div className="App">
        <div className="container">
            <div className="background">
                <h1 className="id">#???</h1>
            </div>
            <div className="species">
                <div className="species-img">
                    <img width={60} src=""></img>
                </div>
                {/* <div className="species-info">
                    <h1 className="type">{pokemon.main_type}</h1>
                    <h1 className="name">{pokemon.name}</h1>
                </div> */}
            </div>
            <img className="pokemon-img" width={340} src="/go.png"/>
            <form className="find-form" onSubmit={goPokemon}>
              <input className="find-input" type="text" placeholder='Find a Pokemon!' value={pokemonName} onChange={handleChange} />
              <input className="go-btn" type="submit" value="Go" />
            </form>
        </div>
    )
    </div>
  )
}

export default Go
