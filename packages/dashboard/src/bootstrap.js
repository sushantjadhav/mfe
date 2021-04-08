import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

export { mount };

// For dev environment only
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-dashboard');

  if (el) {
    mount(el);
  }
}
