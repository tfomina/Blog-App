import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "components/LoginForm";

export const Authentication: React.FC = () => {
  return (
    <div className="auth-page py-5">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center">Login</h1>
            <p className="text-center">
              <Link to="register" className="text-success">
                Need an account?
              </Link>
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
