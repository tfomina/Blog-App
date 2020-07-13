import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "components/LoginForm";

export const Login: React.FC = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center">Sign in</h1>
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
