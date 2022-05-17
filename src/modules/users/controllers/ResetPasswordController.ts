import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';
interface IRequest {
    token: string;
    password: string;
}
export default class ResetPasswordControler {
    public async create(request: Request, response: Response) {
        const { password, token } = request.body;

        const resetPassword = new ResetPasswordService();

        await resetPassword.execute({
            token,
            password,
        });
    }
}
