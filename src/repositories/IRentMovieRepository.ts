export interface IRentMovieRepository {

    isMovieAvailable(movieId:number): Promise<boolean>;

    isMovieAlreadyRentedByUser(movieId:number, userId:number): Promise<boolean>;

    rentMovie(movieId:number, userId:number): Promise<void>;

    returnMovie(movieId:number, userId:number): Promise<void>
}