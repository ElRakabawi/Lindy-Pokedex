import { FC, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { POKEAPI_BASE, POKEAPI_IMG } from "../../constants"
import { padInt } from "../../utils/padInt"
import "./style.css"

interface IPokemon {
    id: number,
    name: string,
    main_type: string,
    base_experience: number,
    sprites: {
        front_default: string
    },
    types: {
        type: {
            name: string
        }
    }[],
    height: number,
    weight: number,
    abilities: {
        ability: {
            name: string
        }
    }[],
    stats: {
        base_stat: number,
        stat: {
            name: string
        }
    }[]
}

const Pokemon: FC<Record<string, never>> = (() => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({} as IPokemon)

    useEffect(() => {
        fetch(`${POKEAPI_BASE}/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                data.id = padInt(Number.parseInt(id!))
                data.main_type = data.types[0]?.type.name
                setPokemon(data)
                console.log(data)
            })
    }, [id])

    return(
        <div className="container">
            <div className="background">
                <h1 className="id">#{pokemon.id}</h1>
            </div>
            <div className="species">
                <div className="species-img">
                    <img width={60} src={`/types/${pokemon.main_type}.svg`}></img>
                </div>
                <div className="species-info">
                    <h1 className="type">{pokemon.main_type}</h1>
                    <h1 className="name">{pokemon.name}</h1>
                </div>
            </div>
            <img className="pokemon-img" width={340} src={`${POKEAPI_IMG}/${pokemon.id}.png`} alt={pokemon.name} />

            <div className="info">
                <div className="info-item">
                    <h1 className="info-title">Height</h1>
                    <h1 className="info-value number">{'0.' + pokemon.height}</h1>
                    <span className="info-value unit">Meter</span>
                </div>
                <div className="info-item">
                    <h1 className="info-title">Weight</h1>
                    <h1 className="info-value number">{pokemon.weight?.toString().split('').join('.')}</h1>
                    <span className="info-value unit">Kg</span>
                </div>
                <div className="info-item">
                    <h1 className="info-title">Base Experience</h1>
                    <h1 className="info-value number">{pokemon.base_experience}</h1>
                    <span className="info-value unit">Exp.</span>
                </div>
                {/* {pokemon.abilities && (
                    <div className="info-item">
                        <h1 className="info-title">Abilities</h1>
                        <h1 className="info-value">
                            {pokemon.abilities.map((ability, index) => {
                                return (
                                    <div className="ability" key={index}>
                                        {ability.ability.name}
                                        {index < pokemon.abilities.length - 1}
                                    </div>
                                )
                            })}
                        </h1>
                </div>
                )} */}
            </div>
            <div className="stats">
                {pokemon.stats && (
                    <div className="stats-container">
                        {pokemon.stats.filter((stat) => !stat.stat.name.toString().includes('-')).map((stat, index) => {
                            return (
                                <div className="stat" key={index}>
                                    <img width={25} src={`/stats/${stat.stat.name}.svg`} alt={stat.stat.name}/>
                                    <h1 className="stat-title">{stat.stat.name}</h1>
                                    <h1 className="stat-value number">{stat.base_stat}</h1>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
})

export default Pokemon