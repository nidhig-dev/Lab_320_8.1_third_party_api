import Person from '../components/Person';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function People() {
const [people,setPeople]=useState([]);
  const peopleURL = "https://swapi.info/api/people";

  //get people data on mount
  useEffect(() => {
    async function getPeople() {
      try {
        let res = await axios.get(peopleURL);
        let limitRes = res.data.splice(0, 10)
        setPeople(limitRes);
      }
      catch (err) {
        console.error(err.message);
      }

    }
    getPeople();

  }, [])
  return (
    <div>

      {(people) ?
        <ul>
          {
            people.map((person) => (
              < Person key={person.name} person={person}/>
            ))
          }
        </ul>
        :
        <p>Loading data...</p>
      }

    </div>
  )
}
