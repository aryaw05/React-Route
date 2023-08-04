import React from "react";
import CardLayout from "../components/Layouts/CardLayout";
import CardFill from "../components/fragments/Card";
const WelcomePage = (prpos) => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-9xl font-bold  text-center">
          Welcome To <br />
          My App
        </h1>
      </div>
      <CardLayout>
        <CardFill /> 
        <CardFill /> 
        <CardFill /> 
        <CardFill /> 
        <CardFill /> 
        <CardFill /> 
        <CardFill /> 
      </CardLayout>
    </div>
  );
};

export default WelcomePage;
