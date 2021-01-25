import { Movie } from "../../../entities/Movie";
import { connection } from "../../../mysql";
import { IMovieRepository } from "../../IMovieRepository";

export class MovieRepository implements IMovieRepository{
    
    async findByTitle(title: string) : Promise<Movie[]>{
        let sql = "SELECT m.id, m.title, m.director FROM movies AS m WHERE m.title LIKE '%" + title + "%'";
        
        return await this.listMovies(sql);
    }

    async getAllAvalaibleMovies() : Promise<Movie[]>{
        let sql = "SELECT m.id, m.title, m.director FROM movies AS m WHERE m.quantity > (SELECT COUNT(1) FROM rentMovies AS rm WHERE rm.movieId = m.id)";        

        return await this.listMovies(sql);
    }

    private async listMovies(sql:string): Promise<Movie[]>{
        let movies:Movie[] = [];

        await connection.then(async (conn) => {
            let [rows] = await conn.query(sql);

            let results = JSON.parse(JSON.stringify(rows));
            movies = results.map(result => {
                return new Movie(result);
            });            
        });

        return movies;
    }
}