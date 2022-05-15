import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/ForgotpasswordController';
import { messages } from 'joi-translation-pt-br';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();

console.log('Router password aecssada');

passwordRouter.post(
    '/forgot',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
        },
    }),
    forgotPasswordController.create,
);
passwordRouter.post('/');

export default passwordRouter;
