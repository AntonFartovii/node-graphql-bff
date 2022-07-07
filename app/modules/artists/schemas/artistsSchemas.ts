import { gql } from "apollo-server";

export const artistTypeDefs:any = gql`
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: String
    }
    type Query {
        artistsAPI: [Artist]
        artistAPI(id: ID): Artist
    }
`