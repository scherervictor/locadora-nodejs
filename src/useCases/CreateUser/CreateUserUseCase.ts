import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";
const strings = require("../../strings.json");

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUserRepository
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const existingUser = await this.usersRepository.findByEmail(data.email);
        
        if(existingUser.email) {
            throw new Error(strings.userAlreadyExist)
        }
        
        if(!data.name || !data.email || data.email.length <= 0 || !data.password || data.password.length <= 0){
            throw new Error(strings.invalidInformation)
        }

        const user = new User(data);
        user.passwordCryptograph();
        
        await this.usersRepository.save(user);
    }
}