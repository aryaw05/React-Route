import React from "react";
import AuthLayout from "../components/elements/Layouts/AuthLayout";
import FormLogin from "../components/elements/fragments/FormLogin";

const LoginPage = (props) => {
    return (
        <AuthLayout title = "Login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage;