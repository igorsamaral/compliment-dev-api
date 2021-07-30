import { getCustomRepository } from "typeorm"
import { TagRepository } from "../../repositories/TagRepository"

interface TagRequestInterface {
    name: string
}

class CreateTagService {
    async run({name}: TagRequestInterface) {
        const tagRepository = getCustomRepository(TagRepository)

        if (! name) {
            throw new Error("Não foi informado nome da tag");
        }

        const tagName = await tagRepository.findOne({name})

        if (tagName) {
            throw new Error("Já existe uma tag cadastrada com esse nome")
        }

        const tag = tagRepository.create({name})

        await tagRepository.save(tag)

        return tag
    }
}

export { CreateTagService }