import React, { useRef, useEffect } from 'react';

import { mount } from 'dashboardRemote/DashboardApp';

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}> </div>;
};

export default DashboardApp;
