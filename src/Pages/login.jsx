import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = (props) => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
