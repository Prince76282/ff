import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AuthComponent from '@/persons/harsh/component/AuthComponent';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const isOnboarded = useSelector((state) => state.profile.onboarded);
  const location = useLocation();

  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowAuth(true);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <>
        {showAuth ? (
          <AuthComponent isOpen={showAuth} onClose={() => setShowAuth(false)} />
        ) : (
          <div />
        )}
      </>
    );
  }

  // Redirect to onboarding only if not onboarded and not already on onboarding path
  const onboardingPath = "/onsidebar";

  if (!isOnboarded && location.pathname !== onboardingPath) {
    return <Navigate to={onboardingPath} replace />;
  }

  // If onboarded or already on the onboarding page, allow access
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
