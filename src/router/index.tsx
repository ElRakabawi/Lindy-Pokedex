import { createBrowserRouter } from "react-router-dom"
// routes
// import FourOFour from '../views/404'
import Go from '../views/Go'
import Pokemon from '../views/Pokemon'
import PokemonNotFound from '../views/Pokemon404'

import Navbar from "../components/Searchbar"

const Layout: any = ((View: any) => {
  return (
    <>
    <Navbar />
    <div>
      { View }
    </div>
    </>
  )
})

const routesList = [
  {
    path: "*",
    element: Layout(<Go />),
  },
  {
    path: "/",
    element: Layout(<Go />),
  },
  {
    path: "/pokemon/:id",
    element: Layout(<Pokemon />)
  },
  {
    path: "/pokemon404",
    element: Layout(<PokemonNotFound />)
  }
]

// router
const router = createBrowserRouter(routesList)

export default router
export const routes = routesList