import { RESTDataSource } from "apollo-datasource-rest";

export class genresApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL
    }

    async getGenres() {

    }
    async getGenre() {

    }
}