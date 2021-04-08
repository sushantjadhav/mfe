import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'authRemote/AuthApp';

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const nextPathname = location.pathname;
        const currentPathname = history.location.pathname;

        if (currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
