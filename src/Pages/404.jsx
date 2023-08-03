import { useRouteError } from "react-router-dom"
import React from "react";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h1 className="text-9xl font-bold text-slate-400">404</h1>
            <br />
            <p>Sorry Your Page Not Found</p>
            {/* conditional error */}
            <p>{error.statusText || error.message}</p>
        </div>
    )
}
export default ErrorPage;