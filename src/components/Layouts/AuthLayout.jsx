import React from "react";
import { Link } from "react-router-dom";
// import FormLogin from "../fragments/FormLogin";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs ">
        <h1 className="font-bold mb-2 text-blue-600 text-3xl"> {title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please Enter your details
        </p>
        {children}
        <Navigation type={type}/>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center ">
        Dont have A Account {""}<Link to="/Register" className="text-blue-600 font-bold">Register</Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center ">
        Already Have an Account {""} <Link to="/Login" className="text-blue-600 font-bold">Login</Link>
      </p>
    );
  }
};

export default AuthLayout;
