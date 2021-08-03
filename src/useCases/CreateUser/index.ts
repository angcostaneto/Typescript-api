import { MailTrapProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapProvider
);

const createUserController = new CreateUserController(
    createUserCase
)

export { createUserCase, createUserController }