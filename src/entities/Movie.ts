export class Movie {
    public readonly id: string;

    public title: string;
    public director: string;
    public amout: number;

    constructor(props: Omit<Movie, 'id'>, id?: string){
        Object.assign(this, props)
    }
}