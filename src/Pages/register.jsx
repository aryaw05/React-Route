import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/elements/fragments/FormRegister";

const RegisterPage = (props) => {
  return (
    <AuthLayout title="Regsiter">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
