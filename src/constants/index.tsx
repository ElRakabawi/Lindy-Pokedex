export const POKEAPI_BASE="https://pokeapi.co/api/v2"
export const POKEAPI_IMG="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/"

interface IObjectKeys {
    [key: string]: string
}

interface IColors extends IObjectKeys {
    fire: string,
    grass: string,
    steel: string,
    water: string,
    psychic: string,
    ground: string,
    ice: string,
    flying: string,
    ghost: string,
    normal: string,
    poison: string,
    rock: string,
    fighting: string,
    dark: string,
    bug: string,
    dragon: string,
    electric: string,
    fairy: string,
    unknow: string,
    shadow: string,
}

export const COLORS: IColors = {
    fire: '#ff7402',
    grass: '#33a165',
    steel: '#00858a',
    water: '#0050ac',
    psychic: '#cc2936',
    ground: '#724812',
    ice: '#70deff',
    flying: '#5d4e75',
    ghost: '#4d5b64',
    normal: '#753845',
    poison: '#7e0058',
    rock: '#6e1a00',
    fighting: '#634136',
    dark: '#272625',
    bug: '#6e1a00',
    dragon: '#00c431',
    electric: '#bba909',
    fairy: '#d31c81',
    unknow: '#757575',
    shadow: '#29292c',
}
