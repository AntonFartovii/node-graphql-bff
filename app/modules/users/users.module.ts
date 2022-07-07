import { RESTDataSource } from "apollo-datasource-rest";

export class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL
    }

    async getUsersAPI() {
        return this.get(`users`, {
        })
    }

    async getUserAPI(id:string | number) {
        return this.get(`users/${encodeURIComponent(id)}`)
    }

}