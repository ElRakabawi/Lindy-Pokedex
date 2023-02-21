import { FC, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { POKEAPI_BASE, POKEAPI_IMG, COLORS } from "../constants"
import { padInt } from "../utils/padInt"

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
    // const id : number = Number.parseInt(useParams().id!)
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
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

    useEffect(() => {
        if (pokemon.main_type) {
            document.body.style.setProperty('--color', COLORS[pokemon.main_type])
        }
    }, [pokemon])

    return(
        <div className="container">
            <div className="background">
                <h1 className="id">#{pokemon.id}</h1>
            </div>
            <img src="/chevron.png" className="chev back" onClick={() => navigate(`/pokemon/${Number.parseInt(id!)-1}`)} />
            <img src="/chevron.png" className="chev next" onClick={() => navigate(`/pokemon/${Number.parseInt(id!)+1}`)} />
            <div className="species">
                <div className="species-img">
                {pokemon.id? <img width={60} src={`/types/${pokemon.main_type}.svg`}></img> : <img width={60} src=""></img>}
                </div>
                <div className="species-info">
                    <h1 className="type">{pokemon.main_type}</h1>
                    <h1 className="name">{pokemon.name}</h1>
                </div>
            </div>
            {pokemon.id? <img className="pokemon-img" width={340} src={`${POKEAPI_IMG}/${pokemon.id}.png`} alt={pokemon.name} /> : (<></>)}
            <div className="info">
                <div className="info-item">
                    <h1 className="info-title">Height</h1>
                    <h1 className="info-value number">{pokemon.height ? pokemon.height/10 : '-'}</h1>
                    <span className="info-value unit">Meter</span>
                </div>
                <div className="info-item">
                    <h1 className="info-title">Weight</h1>
                    <h1 className="info-value number">{pokemon.weight? pokemon.weight/100 : '-'}</h1>
                    <span className="info-value unit">Kg</span>
                </div>
                <div className="info-item">
                    <h1 className="info-title">Base Experience</h1>
                    <h1 className="info-value number">{pokemon.base_experience}</h1>
                    <span className="info-value unit">Exp.</span>
                </div>
            </div>
            <div className="stats">
                {pokemon.stats && (
                    <div className="stats-container">
                        {pokemon.stats.filter((stat) => !stat.stat.name.toString().includes('-')).map((stat, index) => {
                            return (
                                <div className="stat" key={index}>
                                    {pokemon? <img width={25} src={`/stats/${stat.stat.name}.svg`} alt={stat.stat.name}/> : <img width={25} src="" alt={stat.stat.name}/> }
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