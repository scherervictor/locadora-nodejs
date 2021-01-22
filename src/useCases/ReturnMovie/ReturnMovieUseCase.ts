import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";

export class ReturnMovieUseCase {
    constructor(
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(movieId: number){         
        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(movieId, userId);

        if(!isMovieAlreadyRentedByUser) {
            throw new Error("Você não tem esse filme Locado!");
        }

        await this.rentMovieRepository.returnMovie(movieId, userId);
    }
}