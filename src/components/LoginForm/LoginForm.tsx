import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button } from "src/ui-controls/Button";
import { InputWithError } from "src/ui-controls/Input";
import { schema } from "./LoginForm.validator";

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log("data ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <fieldset className="form-group">
        <InputWithError
          name="email"
          placeholder="Email"
          error={errors.email?.message}
          ref={register}
        />
      </fieldset>
      <fieldset className="form-group">
        <InputWithError
          name="password"
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          ref={register}
        />
      </fieldset>
      <Button text="Sign in" type="submit" className="float-right" />
    </form>
  );
};
