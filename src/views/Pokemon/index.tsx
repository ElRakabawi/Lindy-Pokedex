import { FC, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { POKEAPI_BASE, POKEAPI_IMG } from "../../constants"
import { padInt } from "../../utils/padInt"
import "./style.css"

interface IPokemon {
    name: string
    sprites: {
        front_default: string
    }
}

const Pokemon: FC<Record<string, never>> = (() => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({} as IPokemon)

    useEffect(() => {
        fetch(`${POKEAPI_BASE}/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [id])

    return(
        <div className="container">
            <div className="background"></div>
            <h1>Pokemon id: {id}</h1>
            <h2>{pokemon.name}</h2>
            <img width={400} src={`${POKEAPI_IMG}/${padInt(Number.parseInt(id!))}.png`} alt={pokemon.name} />
        </div>
    )
})

export default Pokemon