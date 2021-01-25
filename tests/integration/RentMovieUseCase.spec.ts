import request from "supertest";
import { app } from "../../src/app";

describe("RentMovie", () => {
    const user = {email:"victor@scherer.com", password:"passwordTest"};
    it("should rent one movie and succeed", async () => {

        const loginResponse = await request(app).post("/login").send({email: user.email, password: user.password});

        const response = await request(app).post("/rentMovie").set("authorization", loginResponse.body.token).send({movieId:2});

        expect(response.status).toBe(201);
    });

    it("should rent one movie and fail", async () => {

        const loginResponse = await request(app).post("/login").send({email: user.email, password: user.password});

        const response = await request(app).post("/rentMovie").set("authorization", loginResponse.body.token).send({movieId:1});

        expect(response.status).toBe(400);
    });

    it("should rent one movie and fail unauthorized", async () => {

        const response = await request(app).post("/rentMovie").set("authorization", 'Bearer 321312').send({movieId:2});

        expect(response.status).toBe(401);
    });
});