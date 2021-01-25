import bcrypt from "bcrypt";

export class User{
    public readonly id: string;
    
    public name: string;
    public email: string;
    public password: string;
    
    constructor(props: Omit<User, 'id' | 'passwordCryptograph'>, id?: string){
        Object.assign(this, props);
    }

    passwordCryptograph() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}