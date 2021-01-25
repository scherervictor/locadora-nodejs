import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";
import { IRentMovieRequestDTO } from "./IRentMovieRequestDTO";
const strings = require("../../strings.json");

export class RentMovieUseCase {
    constructor (
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(data: IRentMovieRequestDTO) {
        const isMovieAvailable = await this.rentMovieRepository.isMovieAvailable(data.movieId);
        
        if(!isMovieAvailable) {
            throw new Error(strings.movieNotAvailable);
        }

        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(data.movieId, data.userId);

        if(isMovieAlreadyRentedByUser) {
            throw new Error(strings.youAlreadyRentedThisMovie);
        }
        
        await this.rentMovieRepository.rentMovie(data.movieId, data.userId);
    }
}