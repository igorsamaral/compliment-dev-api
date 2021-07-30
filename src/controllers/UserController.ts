import { Request, Response } from 'express'
import { CreateUserService } from '../services/user/CreateUserService'

class UserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, admin } = request.body

        const createUserService = new CreateUserService()

        const user = await createUserService.run({name, email, password, admin})

        return response.json(user)
    }
}

export { UserController }