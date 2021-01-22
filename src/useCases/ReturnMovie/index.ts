import { RentMovieRepository } from "../../repositories/implementations/MySQL/RentMovieRepository";
import { ReturnMovieController } from "./ReturnMovieController";
import { ReturnMovieUseCase } from "./ReturnMovieUseCase";

const mysqlRentMovieRepository = new RentMovieRepository();

const returnMovieUseCase = new ReturnMovieUseCase(
    mysqlRentMovieRepository
);

const returnMovieController = new ReturnMovieController(
    returnMovieUseCase
);

export { returnMovieUseCase, returnMovieController }