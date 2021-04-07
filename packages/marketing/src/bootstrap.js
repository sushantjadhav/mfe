import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  console.log('Initial path: ', initialPath);
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (location) => {
      const nextPathname = location.pathname;
      const currentPathname = history.location.pathname;

      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

export { mount };

// For dev environment only
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-marketing');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
