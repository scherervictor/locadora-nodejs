import { IRentMovieRepository } from "../../repositories/IRentMovieRepository";

export class RentMovieUseCase {
    constructor (
        private rentMovieRepository: IRentMovieRepository
    ) {}

    async execute(movieId: number) {
        const isMovieAvailable = await this.rentMovieRepository.isMovieAvailable(movieId);
        if(!isMovieAvailable) {
            throw new Error("Filme não disponível para locação");
        }

        const isMovieAlreadyRentedByUser = await this.rentMovieRepository.isMovieAlreadyRentedByUser(movieId, userId);

        if(isMovieAlreadyRentedByUser) {
            throw new Error("Você já locou esse filme!");
        }

        await this.rentMovieRepository.rentMovie(movieId, userId);
    }
}