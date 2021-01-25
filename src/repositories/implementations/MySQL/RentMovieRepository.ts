import { connection } from "../../../mysql";
import { IRentMovieRepository } from "../../IRentMovieRepository";

export class RentMovieRepository implements IRentMovieRepository {
    async isMovieAvailable(movieId: number): Promise<boolean> {
        let sql = "SELECT m.quantity > (SELECT COUNT(1) FROM rentMovies AS rm WHERE rm.movieId = m.id) AS available FROM movies AS m WHERE m.id = " + movieId;
        
        return await this.checkMovieAvalability(sql);
    }
    async isMovieAlreadyRentedByUser(movieId: number, userId: number): Promise<boolean> {
        let sql = "SELECT COUNT(1) AS available FROM rentMovies AS rm WHERE rm.movieId = " + movieId + " AND rm.userId = " + userId;

        return await this.checkMovieAvalability(sql);
    }
    async rentMovie(movieId: number, userId: number): Promise<void> {
        let sql = "INSERT INTO rentMovies (movieId, userId) VALUES (? , ?)";

        await this.rentReturnMovie(sql, [movieId, userId]);
    }
    async returnMovie(movieId: number, userId: number): Promise<void> {
        let sql = "DELETE FROM rentMovies WHERE movieId = ? AND userId = ?";

        await this.rentReturnMovie(sql,[movieId, userId]);
    }
    
    async checkMovieAvalability(sql: string): Promise<boolean> {
        let result: boolean;

        await connection.then(async (conn) => {
            let [rows] = await conn.query(sql);
            result = rows[0] ? rows[0].available === 1 : false;          
        });

        return result;
    }

    async rentReturnMovie(sql: string, params: any): Promise<void> {
        await connection.then(async (conn) => {
            await conn.query(sql, params);         
        });
    }
}