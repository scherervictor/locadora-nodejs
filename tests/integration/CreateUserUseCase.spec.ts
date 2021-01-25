import request from "supertest";
import { app } from "../../src/app";

describe("CreateUser", () => {
    it("should create new user with valid parameters and succeed", async () => {
        const user = {name:"victor", email:"victoreduardo@scherer.com"+ Math.random(), password:"passwordTest"};

        const response = await request(app).post("/users").send(user);

        expect(response.status).toBe(201);
    });

    it("should create new user with invalid parameters and fail", async () => {
        const user = {name:"victor", email:"victor@scherer.com", password:"passwordTest"};

        const response = await request(app).post("/users").send(user);

        expect(response.status).toBe(400);
    });
});