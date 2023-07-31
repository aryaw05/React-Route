import React from "react";
import InputForm from "../Input";
import Button from "../Button";
const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <Button></Button>
    </form>
  );
};

export default FormLogin;
