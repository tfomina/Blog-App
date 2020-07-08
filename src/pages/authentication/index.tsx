import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const requiredMessage = "Заполните поле";
const wrongEmailMessage = "Неверный формат email";

const schema = yup.object().shape({
  email: yup.string().trim().email(wrongEmailMessage).required(requiredMessage),
  password: yup.string().trim().required(requiredMessage),
});

export const Authentication: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log("data ", data);

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
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <fieldset className="form-group">
                <input
                  name="email"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  ref={register}
                />
                {errors.email?.message && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.email?.message}
                  </div>
                )}
              </fieldset>
              <fieldset className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  ref={register}
                />
                {errors.password?.message && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {errors.password?.message}
                  </div>
                )}
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
