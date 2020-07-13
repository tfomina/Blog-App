import React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "components/RegisterForm";

export const Register: React.FC = () => {
  return (
    <div className="py-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center">Sign up</h1>
            <p className="text-center">
              <Link to="login" className="text-success">
                Have an account?
              </Link>
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};
