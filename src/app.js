import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home';
import SignUP from './pages/signup';
import SignIN from './pages/signin';
import Browse from './pages/browse';
import * as Routes from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import useAuthListener from './hooks/use-auth-listener';

export function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={Routes.Browse}
          path={Routes.Sign_In}
        >
          <SignIN />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={Routes.Browse}
          path={Routes.Sign_UP}
        >
          <SignUP />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={Routes.Browse}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={Routes.Browse}
          path={Routes.Home}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
