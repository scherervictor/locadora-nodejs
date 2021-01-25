import request from "supertest";
import { app } from "../../src/app";

describe("FindAvailableMovies", () => {
    it("should find available movies and succeed", async () => {
        const response = await request(app).get("/moviesAvailable").send();

        expect(response.status).toBe(200);
    });
});