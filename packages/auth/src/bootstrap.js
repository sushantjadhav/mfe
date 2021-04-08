import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: (location) => {
      const nextPathname = location.pathname;
      const currentPathname = history.location.pathname;
      console.log('nextPathname: ', nextPathname);
      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

export { mount };

// For dev environment only
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-auth');
  console.log('element :', el);
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
