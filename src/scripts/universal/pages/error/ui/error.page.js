import React from 'react';
import { renderRoutes } from 'react-router-config'

export const ErrorPage = ({ route }) => {
    return renderRoutes(route.routes);
};
