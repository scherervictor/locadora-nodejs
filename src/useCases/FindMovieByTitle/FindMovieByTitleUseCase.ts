import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
import { strings } from "../../strings";

export class FindMovieByTitleUseCase {
    constructor (
        private moviesRepository: IMovieRepository
    ) {}

    async execute(title: string): Promise<Movie[]> {
        const movies = await this.moviesRepository.findByTitle(title);

        if(movies.length === 0) {
            throw new Error(strings.movieNotFound);
        }

        return movies;
    }
}