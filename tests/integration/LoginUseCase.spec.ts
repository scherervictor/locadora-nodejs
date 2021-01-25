import request from "supertest";
import { app } from "../../src/app";

describe("Login", () => {
    const user = {email:"victor@scherer.com", password:"passwordTest"};
    it("should login and succeed", async () => {
        const response = await request(app).post("/login").send({email: user.email, password: user.password});

        expect(response.body).toHaveProperty("token");
    });

    it("should login and fail", async () => {
        const response = await request(app).post("/login").send({email: user.email, password: "outropassword"});

        expect(response.status).toBe(400);
    });
});