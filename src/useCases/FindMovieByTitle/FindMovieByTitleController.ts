import { Request, Response } from "express";
import { FindMovieByTitleUseCase } from "./FindMovieByTitleUseCase";
const strings = require("../../strings.json");

export class FindMovieByTitleController {
    constructor (
        private findMovieByTitleUseCase: FindMovieByTitleUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.query;

        if(!title) {
            return response.status(400).json({
                message: strings.informTitle
            });
        }
        

        try{
           let movies = await this.findMovieByTitleUseCase.execute({title})

           return response.status(200).json({
               movies
           }).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || strings.error
            })
        }
    }
}