import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { sign } from "jsonwebtoken"

interface AuthenticateUserRequestInterface {
    email: string
    password: string
}

class AuthenticateUserService {
    async run({ email, password }: AuthenticateUserRequestInterface) {
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({email})

        if (! user) {
            throw new Error("Usuário ou senha inválidos");
        }

        const passwordMathc = await compare(password, user.password)
        
        if (! passwordMathc) {
            throw new Error("Usuário ou senha inválidos");
        }

        const token = sign(
            {
                email: user.email
            },
            "c6f41e03112205e5549d4ed20a5fa7de",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token
    }
}

export { AuthenticateUserService }