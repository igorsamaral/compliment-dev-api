import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../../repositories/ComplimentRepository"
import { classToPlain } from 'class-transformer'

class ListUserSentComplimentsService {
    async run(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository)
       
        const compliments = await complimentRepository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "tag"]
        })

        return classToPlain(compliments)
    }
}

export { ListUserSentComplimentsService }