import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <div className="padding-v-60">
            <h3 className="text-center">
                Go <Link to="/">home</Link>!
            </h3>
            <p className="text-center margin-t-30">
                The page you have requested is not found.
            </p>
        </div>
    );
};
