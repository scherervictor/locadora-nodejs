import { Request, Response } from "express";
import { RentMovieUseCase } from "./RentMovieUseCase";

export class RentMovieController {
    constructor (
        private rentMovieUseCase: RentMovieUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { movieId } = request.body;

        try{
            await this.rentMovieUseCase.execute(movieId)

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro inesperado.."
            })
        }
    }
}