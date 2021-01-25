import { IUserRepository } from "../../repositories/IUserRepository";
import { ILoginRequestDTO } from "./ILoginRequestDTO";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const strings = require("../../strings.json");

export class LoginUseCase {
    constructor (
        private usersRepository: IUserRepository
    ) {}

    async execute (data: ILoginRequestDTO): Promise<string> {
        const user = await this.usersRepository.findByEmail(data.email);

        if (!user.email) {
            throw new Error(strings.invalidCredentials);
        }

        if(!data.email || !data.password) {
            throw new Error(strings.invalidCredentials);
        }

        const validPassword = await bcrypt.compare(data.password, user.password);

        if (!validPassword) {
            throw new Error(strings.invalidCredentials);
        }

        return jwt.sign({userId: user.id, userName: user.name}, process.env.JWT_SECRET, { expiresIn: 1200 });
    }
}