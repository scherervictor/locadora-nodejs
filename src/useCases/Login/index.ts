import { UserRepository } from "../../repositories/implementations/MySQL/UserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const mysqlUserRepository = new UserRepository();

const loginUseCase = new LoginUseCase(
    mysqlUserRepository
);

const loginController = new LoginController(
    loginUseCase
);

export { loginUseCase, loginController }