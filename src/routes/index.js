import React from 'react';
import { Switch, Route } from 'react-router';
// import App from '../App';

import Homepage from '../Page/Homepage';
import Aboutpage from '../Page/Aboutpage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/About" component={Aboutpage} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Homepage} />
    </Switch>
  );
}