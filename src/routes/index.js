import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DigitalHouseClone from '../pages/DigitalHouseClone';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/digital-house-clone" exact component={DigitalHouseClone} />
  </Switch>
);

export default Routes;
