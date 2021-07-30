import { Request, Response } from 'express'
import { CreateTagService } from '../services/tag/CreateTagService'

class TagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createTagService = new CreateTagService()

        const tag = await createTagService.run({name})

        return response.json(tag)
    }
}

export { TagController }