import React from "react";
import InputForm from "../Input";
import Button from "../Button";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name..."
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />
      <Button>Submit</Button>
    </form>
  );
};

export default FormRegister;
