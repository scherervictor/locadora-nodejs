import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";
import { strings } from "../../strings";

export class ReturnMovieUseCase {
    constructor(
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(movieId: number, userId: number){         
        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(movieId, userId);

        if(!isMovieAlreadyRentedByUser) {
            throw new Error(strings.youAlreadyRentedThisMovie);
        }

        await this.rentMovieRepository.returnMovie(movieId, userId);
    }
}