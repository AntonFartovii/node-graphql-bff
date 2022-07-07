import { gql } from "apollo-server";

export const bandTypeDefs:any = gql`
    type Band {
        id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }
    type Query {
        bandsAPI: [Band]
        bandAPI(id: ID): Band
    }
`