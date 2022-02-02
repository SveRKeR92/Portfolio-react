import { useLocation, Link } from "react-router-dom";

function NoMatch(){
      let location = useLocation();

      return(
            <div>
                  <p>
                        No match for <code>{location.pathname}</code>
                  </p>
                  <br />
                  <Link to="/">Back to home</Link>
            </div>
      )
}

export default NoMatch