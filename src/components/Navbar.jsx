import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projets">Projets</Link>
        </li>
        <li>
          <Link to="/cv">Mon CV</Link>
        </li>
      </ul>
    </nav>
  );
}
