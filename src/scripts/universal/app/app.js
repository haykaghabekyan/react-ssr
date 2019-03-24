import React from 'react';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '../routes';

export const App = () => {
    return renderRoutes(routes);
};
