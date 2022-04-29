import { Request, response, Response } from 'express';
import { request } from 'http';
import CreateUserService from '../services/CreateUserSerive';
import ListUserService from '../services/ListUserService';
export default class UsersController {
    public async index(
        erquest: Request,
        response: Response,
    ): Promise<Response> {
        const listUser = new ListUserService();

        const users = listUser.execute();

        return response.json(users);
    }
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        return response.json(user);
    }
}
