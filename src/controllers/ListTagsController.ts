import { Request, Response } from 'express'
import { ListTagsService } from '../services/tag/ListTagsService'

class ListTagsController {
    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagsService()

        const tags = await listTagsService.run()

        return response.json(tags)
    }
}

export { ListTagsController }