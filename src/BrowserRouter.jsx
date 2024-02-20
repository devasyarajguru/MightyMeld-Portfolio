import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BrowserRouter = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen to popstate event for URL changes
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderComponentForPath = (path) => {
    const route = routes.find((route) => route.path === path);
    return route ? route.component : null;
  };

  return <>{renderComponentForPath(currentPath)}</>;
};

BrowserRouter.propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.oneOfType([
          PropTypes.element,
          PropTypes.func // valid React component
        ]).isRequired
      })
    ).isRequired
  };

export default BrowserRouter;
