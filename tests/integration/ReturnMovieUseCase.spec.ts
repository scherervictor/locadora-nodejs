import request from "supertest";
import { app } from "../../src/app";

describe("ReturnMovie", () => {
    const user = {email:"victor@scherer.com", password:"passwordTest"};
    it("should return one movie and succeed", async () => {

        const loginResponse = await request(app).post("/login").send({email: user.email, password: user.password});

        const response = await request(app).post("/returnMovie").set("authorization", loginResponse.body.token).send({movieId:3});

        expect(response.status).toBe(200);
    });

    it("should return one movie and fail", async () => {

        const loginResponse = await request(app).post("/login").send({email: user.email, password: user.password});

        const response = await request(app).post("/returnMovie").set("authorization", loginResponse.body.token).send({movieId:4});

        expect(response.status).toBe(400);
    });

    it("should return one movie and fail unauthorized", async () => {

        const response = await request(app).post("/returnMovie").set("authorization", 'Bearer 321312').send({movieId:4});

        expect(response.status).toBe(401);
    });
});