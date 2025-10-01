import Planet from "../components/Planet";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const planetURL = "https://swapi.info/api/planets";
  //Planet data on mount
  useEffect(() => {
    async function getPlanet() {
      try {
        let res = await axios.get(planetURL);
        let limitRes=res.data.splice(0,10);
        setPlanets(limitRes);
      }
      catch (err) {
        console.error(err.message);
      }

    }
    getPlanet();

  }, [])



  return (
    <div>
      {(planets)?
      <ul>
      {
        planets.map((planet) => (
          <Planet key={planet.name} planet={planet}/>
        ))
      }
      </ul>
      :
      <p>Loading data....</p>
    }
    </div>
  )
}
