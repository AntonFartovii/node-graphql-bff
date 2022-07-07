import { gql } from "apollo-server";

export const genreTypeDefs:any = gql`
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    type Query {
        genresAPI: [Genre]
        genreAPI(id: ID): Genre
    }
`