import { Request, Response } from "express";
import { RentMovieUseCase } from "./RentMovieUseCase";
const strings = require("../../strings.json");

export class RentMovieController {
    constructor (
        private rentMovieUseCase: RentMovieUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { movieId } = request.body;
        const userId = <number>request.userId;
        try{
            await this.rentMovieUseCase.execute({movieId, userId});

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || strings.error
            })
        }
    }
}