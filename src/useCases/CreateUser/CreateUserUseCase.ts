import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDto } from "./CreateUserDto";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository, // Isto cria tambem uma propriedade privada dentro da classe.
        private mailProvider: IMailProvider
    ) {}
    
    async execute(data: ICreateUserRequestDto) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exits.')
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe Meu App',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem vindo a plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma</p>'
        })
    }
}