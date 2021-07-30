import { getCustomRepository } from "typeorm"
import { TagRepository } from "../../repositories/TagRepository"

class ListTagsService {
    async run() {
        const listTagsRepository = getCustomRepository(TagRepository)

        const tags = listTagsRepository.find()

        return tags
    }
}

export { ListTagsService }