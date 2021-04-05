// import { mount as marketingMount } from 'MarketingRemote/MarketingBootstrap';
// import { mount as dashboardMount } from 'DashboardRemote/DashboardBootstrap';
// import { mount as authMount } from 'AuthRemote/AuthBootstrap';

// const marketingEl = document.querySelector('#dev-marketing');
// const dashboardEl = document.querySelector('#dev-dashboard');
// const authEl = document.querySelector('#dev-auth');

// marketingMount(marketingEl);
// dashboardMount(dashboardEl);
// authMount(authEl);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
