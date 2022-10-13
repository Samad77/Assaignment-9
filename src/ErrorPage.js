import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Ops an Error occured</h1>
            {
                error && (<div>
                    <h1>{error.statusText || error.massage}</h1>
                    <h1>{error.status}</h1>
                </div>)
            }
        </div>
    );
};

export default ErrorPage;