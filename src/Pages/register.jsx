import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = (props) => {
  return (
    <AuthLayout title="Register" type = "register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
