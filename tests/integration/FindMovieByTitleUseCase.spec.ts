import request from "supertest";
import { app } from "../../src/app";

describe("FindMovieBytTitle", () => {
    it("should find movie by title and fail", async () => {
        const response = await request(app).get("/movies?title=filmeDesconhecido").send();

        expect(response.status).toBe(400);
    });

    it("should find movie by title and succeed", async () => {
        const response = await request(app).get("/movies?title=filme").send();

        expect(response.status).toBe(200);
    });
});