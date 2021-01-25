import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";
import { IReturnMovieRequestDTO } from "./IReturnMovieRequestDTO";
const strings = require("../../strings.json");

export class ReturnMovieUseCase {
    constructor(
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(data: IReturnMovieRequestDTO){         
        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(data.movieId, data.userId);

        if(!isMovieAlreadyRentedByUser) {
            throw new Error(strings.youAlreadyRentedThisMovie);
        }

        if(!data.movieId) {
            throw new Error(strings.invalidInformation);
        }

        await this.rentMovieRepository.returnMovie(data.movieId, data.userId);
    }
}