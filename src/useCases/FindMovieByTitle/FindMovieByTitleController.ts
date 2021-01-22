import { Request, Response } from "express";
import { FindMovieByTitleUseCase } from "./FindMovieByTitleUseCase";

export class FindMovieByTitleController {
    constructor (
        private findMovieByTitleUseCase: FindMovieByTitleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.query;

        if(!title) {
            return response.status(400).json({
                message: "Favor informar um titulo!"
            });
        }
        try{
           let movies = await this.findMovieByTitleUseCase.execute(title.toString())

           return response.status(200).json({
               movies
           }).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro inesperado.."
            })
        }
    }
}