import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button } from "src/ui-controls/Button";
import { InputWithError } from "src/ui-controls/Input";
import { schema } from "./LoginForm.validator";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data ", data);

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
