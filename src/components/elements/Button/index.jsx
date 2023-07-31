/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import { Children } from "react";

 const Button = (props) =>{
    const {children} = props ;
    return (
        <button className="p-5 bg-blue-600 text-white rounded-lg w-full hover:opacity-80"><p>{children}</p></button>
    )
}

export default Button; 