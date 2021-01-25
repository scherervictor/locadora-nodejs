import { Movie } from "../../entities/Movie";
import { IMovieRepository } from "../../repositories/IMovieRepository";
import { IFindMovieByTitleRequestDTO } from "./IFindMovieByTitleRequestDTO";
const strings = require("../../strings.json");

export class FindMovieByTitleUseCase {
    constructor (
        private moviesRepository: IMovieRepository
    ) {}

    async execute(data: IFindMovieByTitleRequestDTO): Promise<Movie[]> {
        const movies = await this.moviesRepository.findByTitle(data.title);

        if(movies.length === 0) {
            throw new Error(strings.movieNotFound);
        }

        return movies;
    }
}