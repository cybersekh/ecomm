import express from 'express';
import categories from './categoriesRoutes.js';

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({ titulo: 'Ecomm Alura' });
    });

    app.use(
        express.json(),
        categories,
    );
};

export default routes;