import { Movie } from "../../src/entities/Movie";


it("should create new movie with correct values", async () => {
    const movie = new Movie({
        amout:5,
        director: "Victor",
        title: "Victor Test"
    });

    expect(movie.amout).toBe(5);
    expect(movie.director).toBe("Victor");
    expect(movie.title).toBe("Victor Test");
});
