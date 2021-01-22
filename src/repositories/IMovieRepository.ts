import { Movie } from "../entities/Movie";

export interface IMovieRepository {
    findByTitle(title: string): Promise<Movie[]>;

    getAllAvalaibleMovies(): Promise<Movie[]>;
}