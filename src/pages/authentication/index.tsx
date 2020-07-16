import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginForm } from "components/LoginForm";
import { RegisterForm } from "components/RegisterForm";

const LOGIN_PATHNAME = "/login";

export const Authentication: React.FC = () => {
  const location = useLocation();

  return (
    <div className="col-md-6 offset-md-3 col-xs-12">
      {location.pathname === LOGIN_PATHNAME ? (
        <>
          <h1 className="text-center">Sign in</h1>
          <p className="text-center">
            <Link to="register" className="text-success">
              Need an account?
            </Link>
          </p>
          <LoginForm />
        </>
      ) : (
        <>
          <h1 className="text-center">Sign up</h1>
          <p className="text-center">
            <Link to="login" className="text-success">
              Have an account?
            </Link>
          </p>
          <RegisterForm />
        </>
      )}
    </div>
  );
};
