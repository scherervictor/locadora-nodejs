import { MovieRepository } from "../../repositories/implementations/MySQL/MovieRepository";
import { FindMoviesAvailableController } from "./FindMoviesAvailableController";
import { FindMoviesAvailableUseCase } from "./FindMoviesAvailableUseCase";

const mysqlMovieRepository = new MovieRepository();

const findMoviesAvailableUseCase = new FindMoviesAvailableUseCase(
    mysqlMovieRepository
);

const findMoviesAvailableController = new FindMoviesAvailableController(
    findMoviesAvailableUseCase
);

export { findMoviesAvailableUseCase, findMoviesAvailableController }