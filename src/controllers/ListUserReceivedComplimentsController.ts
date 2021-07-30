import { Request, Response } from 'express'
import { ListUserReceivedComplimentsService } from '../services/compliment/ListUserReceivedComplimentsService'

class ListUserReceivedComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService()

        const compliments = await listUserReceivedComplimentsService.run(user_id)

        return response.json(compliments)
    }
}

export { ListUserReceivedComplimentsController }