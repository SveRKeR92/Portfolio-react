import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import Projets from '../pages/Projets'
import Cv from '../pages/Cv'
import NoMatch from './NoMatch'

const Rooter = () => (
      <Router>
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/projets" component={Projets} />
                  <Route path="/cv" component={Cv} />
                  <Route path="*" component={NoMatch} />
            </Switch>
      </Router>
)

export default Rooter