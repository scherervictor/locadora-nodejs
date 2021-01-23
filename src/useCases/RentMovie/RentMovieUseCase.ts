import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";
import { strings } from "../../strings";

export class RentMovieUseCase {
    constructor (
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(movieId: number, userId: number) {
        const isMovieAvailable = await this.rentMovieRepository.isMovieAvailable(movieId);
        if(!isMovieAvailable) {
            throw new Error(strings.movieNotAvailable);
        }

        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(movieId, userId);

        if(isMovieAlreadyRentedByUser) {
            throw new Error(strings.youAlreadyRentedThisMovie);
        }
        
        await this.rentMovieRepository.rentMovie(movieId, userId);
    }
}