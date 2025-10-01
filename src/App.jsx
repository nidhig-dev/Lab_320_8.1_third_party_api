import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from "axios"
//import pages
import People from "./pages/People"
import Planets from "./pages/Planets"
import Starships from "./pages/Starships"
import Missing from "./pages/Missing"
//import components
import NavBar from './components/Nav/NavBar'

function App() {

/*{
    "films": "https://swapi.info/api/films",
    "people": "https://swapi.info/api/people",
    "planets": "https://swapi.info/api/planets",
    "species": "https://swapi.info/api/species",
    "starships": "https://swapi.info/api/starships",
    "vehicles": "https://swapi.info/api/vehicles"
} */
  

  return (
    <div>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/people' element={<People />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
