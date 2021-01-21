import { UserRepository } from "../../repositories/implementations/MySQL/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mysqlUsersRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
    mysqlUsersRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }