import productsRouter from '@modules/products/routes/product.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();
routes.use('/products', productsRouter);

routes.use('/users', usersRouter);
routes.use('/password', passwordRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
