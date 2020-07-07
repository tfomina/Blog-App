import React from "react";
import { Link } from "react-router-dom";

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
            <form>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </fieldset>
              <button
                className="btn btn-lg btn-success float-right"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
