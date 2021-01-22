import { Request, Response } from "express";
import { ReturnMovieUseCase } from "./ReturnMovieUseCase";

export class ReturnMovieController {
    constructor(
        private createUserUseCase: ReturnMovieUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { movieId } = request.body;

        try{
            await this.createUserUseCase.execute(movieId)

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro inesperado.."
            })
        }
    }
}