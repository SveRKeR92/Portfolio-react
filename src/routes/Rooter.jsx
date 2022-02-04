import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Loading from '../components/loader/Loading';

//lazy import
const Home = lazy(() => import('../pages/Home'));
const Projets = lazy(() => import('../pages/Projets'));
const Projet = lazy(() => import('../pages/Projet'));
const Cv = lazy(() => import('../pages/Cv'));
const NoMatch = lazy(() => import('./NoMatch'));

const Rooter = () => (
  <Suspense fallback={<Loading/>}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projets" component={Projets} />
        <Route path="/projet/:id" component={Projet} />
        <Route path="/cv" component={Cv} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  </Suspense>
);

export default Rooter;
