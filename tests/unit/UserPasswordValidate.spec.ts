import bcrypt from "bcrypt";
import { User } from "../../src/entities/User";


it("should encrypt user password", async () => {
    const user = new User({
    name: "victor",
    email: "victor@scherer.com.br",
    password: "123456"
    });
    user.passwordCryptograph();

    const compareHash = await bcrypt.compare("123456", user.password);

    expect(compareHash).toBe(true);
});
