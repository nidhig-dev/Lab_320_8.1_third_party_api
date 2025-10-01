export default function Planet({planet}) {
  return (
      <li >
          <p> Planet Name: {planet.name} </p>
          <p> Rotation Period: {planet.rotation_period} </p>
      </li>
  )
}
