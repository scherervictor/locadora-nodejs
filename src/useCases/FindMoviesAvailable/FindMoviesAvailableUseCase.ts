import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
const strings = require("../../strings.json");

export class FindMoviesAvailableUseCase {
    constructor (
        private moviesRepository : IMovieRepository
    ) {}

    async execute(): Promise<Movie[]> {
        const movies = await this.moviesRepository.getAllAvalaibleMovies();

        if(!movies) {
            throw new Error(strings.noMoviesAvailable)        
        }

        return movies;
    }
}