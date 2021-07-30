import { UserRepository } from "../../repositories/UserRepository";
import { getCustomRepository } from "typeorm"
import { classToPlain } from 'class-transformer'

class ListUsersService {
    async run() {
        const userRepository = getCustomRepository(UserRepository)

        const users = userRepository.find()

        return classToPlain(users)
    }
}

export { ListUsersService }