import { RentMovieRepository } from "../../repositories/implementations/MySQL/RentMovieRepository";
import { RentMovieController } from "./RentMovieController";
import { RentMovieUseCase } from "./RentMovieUseCase";

const mysqlRentMovieRepository = new RentMovieRepository();

const rentMovieUseCase = new RentMovieUseCase(
    mysqlRentMovieRepository
);

const rentMovieController = new RentMovieController(
    rentMovieUseCase
);

export { rentMovieUseCase, rentMovieController }