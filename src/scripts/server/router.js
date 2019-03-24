import { Router } from 'express';
import { HomeServiceImpl } from '../universal/pages/home/services/home.service.impl';

export const router = () => {
    const router = Router();

    // register api routes here
    //
    router.get('/home', HomeServiceImpl.get);

    return router;
};
