import { MovieRepository } from "../../repositories/implementations/MySQL/MovieRepository";
import { FindMovieByTitleController } from "./FindMovieByTitleController";
import { FindMovieByTitleUseCase } from "./FindMovieByTitleUseCase";

const mysqlMovieRepository = new MovieRepository();

const findMovieByTitleUseCase = new FindMovieByTitleUseCase(
    mysqlMovieRepository
);

const findMovieByTitleController = new FindMovieByTitleController(
    findMovieByTitleUseCase
);

export { findMovieByTitleUseCase, findMovieByTitleController }