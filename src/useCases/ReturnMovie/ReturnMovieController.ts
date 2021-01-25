import { Request, Response } from "express";
import { ReturnMovieUseCase } from "./ReturnMovieUseCase";
const strings = require("../../strings.json")

export class ReturnMovieController {
    constructor(
        private createUserUseCase: ReturnMovieUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { movieId } = request.body;
        const userId = <number>request.userId;
        try{
            await this.createUserUseCase.execute({movieId, userId})

            return response.status(200).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || strings.error
            })
        }
    }
}