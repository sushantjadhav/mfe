import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

export { mount };

// For dev environment only
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-marketing');
  if (el) {
    mount(el);
  }
}
