import { IUserRepository } from "../../repositories/IUserRepository";
import { ILoginDTO } from "./ILoginDTO";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUseCase {
    constructor (
        private usersRepository: IUserRepository
    ) {}

    async execute (data: ILoginDTO): Promise<string> {
        const user = await this.usersRepository.findByEmail(data.email);

        if (!user.email) {
            throw new Error("Credenciais inválidas.");
        }

        let validPassword = await bcrypt.compare(data.password, user.password);

        if (!validPassword) {
            throw new Error("Credenciais inválidas.");
        }

        return jwt.sign({userId: user.id, userName: user.name}, "secretLocadora", { expiresIn: 1200 });
    }
}