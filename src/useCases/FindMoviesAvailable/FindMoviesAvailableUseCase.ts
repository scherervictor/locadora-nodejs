import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";

export class FindMoviesAvailableUseCase {
    constructor (
        private moviesRepository : IMovieRepository
    ) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.moviesRepository.getAllAvalaibleMovies();

        if(!movies) {
            throw new Error("Não há filmes disponíveis.")        
        }

        return movies;
    }
}