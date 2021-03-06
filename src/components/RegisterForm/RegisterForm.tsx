import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button } from "ui-controls/Button";
import { InputWithError } from "ui-controls/Input";
import { schema } from "./RegisterForm.validator";

type FormData = {
  username: string;
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) =>
    console.log("data ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <fieldset className="form-group">
        <InputWithError
          name="username"
          placeholder="Username"
          error={errors.username?.message}
          ref={register}
        />
      </fieldset>
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
      <Button text="Sign up" type="submit" className="float-right" />
    </form>
  );
};
