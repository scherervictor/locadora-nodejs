import { User } from "../../../entities/User";
import { connection } from "../../../mysql";
import { IUserRepository } from "../../IUserRepository";

export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {

        let sql = 'SELECT id, name, email, password FROM users WHERE email = ?';
        let user:User;

        await connection.then(async (conn) => {
            let [rows] = await conn.query(sql, [email]);  

            user = new User(rows[0]);
        });

        return user;
    }
    
    async save(user: User): Promise<void> {

        let sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
        await connection.then(async (conn) => {
            conn.query(sql, [user.name, user.email, user.password]);
        }).catch((err) => {
            throw new Error(err);
        });
    }
}