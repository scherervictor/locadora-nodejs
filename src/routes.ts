import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findMovieByTitleController } from "./useCases/FindMovieByTitle";
import { findMoviesAvailableController } from "./useCases/FindMoviesAvailable";
import { loginController } from "./useCases/Login";
import { rentMovieController } from "./useCases/RentMovie";
import { returnMovieController } from "./useCases/ReturnMovie";
import swaggerUi  from "swagger-ui-express";
import jwt from "jsonwebtoken";
import "dotenv/config";
const swaggerDocument = require('./swagger.json');

const router = Router()

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.post('/login', (request, response) => {
    return loginController.handle(request, response);
});

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/movies', (request, response) => {
    return findMovieByTitleController.handle(request, response);
});

router.get('/moviesAvailable', (request, response) => {
    return findMoviesAvailableController.handle(request, response);
});

router.post('/rentMovie', verifyJwt, (request, response) => {
    return rentMovieController.handle(request, response);
});

router.post('/returnMovie', verifyJwt, (request, response) => {
    return returnMovieController.handle(request, response);
});

function verifyJwt(request, response, next) {
    const token = request.headers['authorization'];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return response.status(401).end()
        }

        request.userId = decoded.userId;
        next();
    });
}

export { router }