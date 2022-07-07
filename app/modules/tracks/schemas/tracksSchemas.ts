import { gql } from "apollo-server";

export const trackTypeDefs:any = gql`
    type Track {
        id: ID!
        title: String!
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }
    type Query {
        trackAPI: [Track]
        tracksAPI(id: ID): Track
    }
`