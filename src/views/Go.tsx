import { useState, useEffect } from 'react'
import { POKEAPI_BASE } from '../constants'
import { useNavigate } from 'react-router-dom'

function Go() {
  const navigate = useNavigate()
  const [pokemonName, setPokemonName] = useState('')
  const [loading, setLoading] = useState(false)

  const goPokemon = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    const pokemon = await fetch(`${POKEAPI_BASE}/pokemon/${pokemonName}`)
    pokemon.status === 200 ?
      pokemon.json().then((data) => {
        data.order ?
          (
            setLoading(false),
            navigate(`/pokemon/${data.order}`)
          ) :
          console.log('error.')
      }) :
      (setLoading(false), navigate('/pokemon404'))
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
            </div>
            <img className="pokemon-img" width={340} src="/go.png"/>
            <form className="find-form" onSubmit={goPokemon}>
              <input className="find-input" type="text" placeholder='Find a Pokemon!' value={pokemonName} onChange={handleChange} />
              <input className="go-btn" type="submit" value="Go" />
            </form>
            {loading && <h3 style={{ fontSize: 14, marginTop: 20, color: "white" }}>Searching...</h3>}
        </div>
    )
    </div>
  )
}

export default Go
