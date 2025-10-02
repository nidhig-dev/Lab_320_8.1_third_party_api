export default function Planet({ planet }) {
  return (
    <li className="link">
      <p> Planet Name: {planet.name} </p>
      <p> Rotation Period: {planet.rotation_period} </p>
      <p>Gravity: {planet.gravity}</p>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
    </li>
  )
}
