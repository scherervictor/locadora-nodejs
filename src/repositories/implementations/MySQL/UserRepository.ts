import { User } from "../../../entities/User";
import { connection } from "../../../mysql";
import { IUserRepository } from "../../IUserRepository";

export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        
        connection.query("SELECT Nome, Email, Senha FROM Usuario", (err, result, fields) => {
            return new User(result[0]);
        })
        
        return null;     
    }
    
    async save(): Promise<void> {

    }
}