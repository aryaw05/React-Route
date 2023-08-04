/* eslint-disable react/prop-types */
import React from "react";


const CardLayout = (props) => {
    const {children} = props ;
    return (
        <div className="flex items-center justify-center flex-wrap ">
            {children}
        </div>
    )
}

export default CardLayout;