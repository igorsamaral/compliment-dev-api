import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/compliment/CreateComplimentService'

class ComplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, message } = request.body
        const { user_id } = request

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.run({tag_id, user_sender: user_id, user_receiver, message})

        return response.json(compliment)
    }
}

export { ComplimentController }