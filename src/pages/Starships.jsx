import Starship from '../components/Starship';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const starshipsURL = "https://swapi.info/api/starships";

  //get people data on mount
  useEffect(() => {
    async function getStarships() {
      try {
        let res = await axios.get(starshipsURL);
        let limitRes = res.data.splice(0, 10)
        setStarships(limitRes);
      }
      catch (err) {
        console.error(err.message);
      }

    }
    getStarships();

  }, [])
  return (
    <div>

      {(starships) ?
        <ul>
          {
            starships.map((starship) => (
              < Starship key={starship.name} starship={starship} />
            ))
          }
        </ul>
        :
        <p>Loading data...</p>
      }

    </div>
  )
}
