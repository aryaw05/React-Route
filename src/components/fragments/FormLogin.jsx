import React from "react";
import InputForm from "../elements/Input";
import Button from "../elements/Button";
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
      <Button>Submit</Button>
    </form>
  );
};

export default FormLogin;
