import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AuthenticateUserService } from "../services/auth/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.run({ email, password })

        return response.json({token})
    }
}

export { AuthenticateUserController }