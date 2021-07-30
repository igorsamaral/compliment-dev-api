import { UserRepository } from "../../repositories/UserRepository";
import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"

interface UserRequestInterface {
    name: string
    email: string
    password: string
    admin?: boolean
}

class CreateUserService {
    async run({ name, email, password, admin = false } : UserRequestInterface) {
        const userRepository = getCustomRepository(UserRepository)

        if (!email) {
            throw new Error("Não foi informado nenhum email");
        }

        const userAlredyExists = await userRepository.findOne({email})

        if (userAlredyExists) {
            throw new Error("Usuário já existe");
        }

        const passwordHash = await hash(password, 8)

        const user = userRepository.create({name, email, password: passwordHash, admin})

        await userRepository.save(user)

        return user
    }
}

export { CreateUserService }