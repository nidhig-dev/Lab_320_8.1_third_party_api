import { Link } from "react-router-dom"
import style from "./Nav.module.css";

export default function NavBar() {
    return (
        <div className={style.nav}>
            <Link  to="/people">People</Link>
            <Link  to="/starships">Starships</Link>
            <Link  to="/planets">Planets</Link>
        </div>
    )
}
