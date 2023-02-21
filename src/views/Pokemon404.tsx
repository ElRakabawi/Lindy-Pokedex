import { useState, useEffect } from 'react'
import { POKEAPI_BASE } from '../constants'
import { useNavigate } from 'react-router-dom'

function Pokemon404() {
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
                <div className="species-info">
                    <h1 className="type">????</h1>
                    <h1 className="name">Pokemon Not Found</h1>
                </div>
            </div>
            <img className="pokemon-img" width={340} src="/not-found.png"/>
        </div>
    )
    </div>
  )
}

export default Pokemon404