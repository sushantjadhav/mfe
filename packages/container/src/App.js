import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/progress';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route exact path='/'>
                <MarketingAppLazy />
              </Route>
              <Route path='/auth'>
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
