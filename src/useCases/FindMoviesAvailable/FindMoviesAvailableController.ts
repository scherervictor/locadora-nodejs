import { Request, Response } from "express";
import { FindMoviesAvailableUseCase } from "./FindMoviesAvailableUseCase";

export class FindMoviesAvailableController {
    constructor(
        private findMoviesAvalaibleUseCase: FindMoviesAvailableUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try{
            let movies = await this.findMoviesAvalaibleUseCase.execute()

            return response.status(200).json({movies}).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro inesperado.."
            })
        }
    }
}