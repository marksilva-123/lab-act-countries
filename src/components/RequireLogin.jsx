import { Navigate, Outlet, useLocation } from "react-router";

// TEMPORARY: Week 15 replaces this flag with the authentication hook.
const isLoggedIn = false;

const RequireLogin = () => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireLogin;
