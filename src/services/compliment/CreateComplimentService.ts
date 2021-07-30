import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../../repositories/ComplimentRepository"
import { UserRepository } from "../../repositories/UserRepository"

interface ComplimentRequestInterface {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

class CreateComplimentService {
    async run({ tag_id, user_sender, user_receiver, message } : ComplimentRequestInterface) {
        const complimentRepository = getCustomRepository(ComplimentRepository)
        const userRepository = getCustomRepository(UserRepository)
        
        if (user_sender === user_receiver) {
            throw new Error("Não pode elogiar você mesmo");
        }

        const userReceiver = await userRepository.findOne(user_receiver)

        if (! userReceiver) {
            throw new Error("Usuário recebedor não localizado");
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentRepository.save(compliment)

        return compliment
    }
}

export { CreateComplimentService }