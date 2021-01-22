import { request, response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findMovieByTitleController } from "./useCases/FindMovieByTitle";
import { findMoviesAvailableController } from "./useCases/FindMoviesAvailable";
import { rentMovieController } from "./useCases/RentMovie";
import { returnMovieController } from "./useCases/ReturnMovie";

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/movies', (request, response) => {
    return findMovieByTitleController.handle(request, response);
});

router.get('/moviesAvailable', (request, response) => {
    return findMoviesAvailableController.handle(request, response);
});

router.post('/rentMovie', (request, response) => {
    return rentMovieController.handle(request, response);
});

router.post('/returnMovie', (request, response) => {
    return returnMovieController.handle(request, response);
});

export { router }