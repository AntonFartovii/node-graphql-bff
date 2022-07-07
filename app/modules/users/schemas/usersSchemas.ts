import { gql } from "apollo-server";

export const userTypeDefs:any = gql`
    type User {
        id: ID!
        firstName: String
        secondName: String
        password: String
        email: String!
    }
    type Query {
        usersAPI: [User]
        userAPI(id: ID): User
    }
`