import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <h1>Auth...</h1>
          <Link to='/auth/signin'>Sign In</Link>
          <Link to='/auth/signup'>Sign Up</Link>
          <Switch>
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/auth/signup' component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
