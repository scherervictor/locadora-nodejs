import { User } from "../../src/entities/User";


it("should create new user with correct values", async () => {
    const user = new User({
        name: "victor",
        email: "victor@scherer.com.br",
        password: "123456"
    });
    
    expect(user.name).toBe("victor");
    expect(user.email).toBe("victor@scherer.com.br");
    expect(user.password).toBe("123456");
});
