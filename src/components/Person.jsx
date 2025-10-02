
export default function Person({person}) {
  return (
      <li className="link">
          <p>Name: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Gender: {person.gender}</p>
      </li>  )
}
