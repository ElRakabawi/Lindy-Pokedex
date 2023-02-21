# Lindy-Pokedex
Lindy Pokedex App. Built using React and PokeAPI. Styling is done from scratch.

# Design Desicions
1. No Global State is used (i.e redux). Doesn't need too.
2. Used React router to have dynamic params for each Pokemon view (to make the code cleaner).
3. Used singleton styling because views (and components) doesn't require different stylings and most of styles are shared between different components.

##  Installation
1. Make sure yarn is installed globally.
2. Run `yarn install` in directory root.
3. Run `yarn dev` or `yarn run vite` to start the development server.
