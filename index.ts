import express from 'express';
import { graphqlHTTP } from "express-graphql";
import cors from 'cors'
import { schema } from "./schema";
import { ApolloServer, gql } from "apollo-server";
import {UsersAPI} from "./app/modules/users/users.module";
import { Resolvers } from "./app/modules/users/resolvers/resolvers";

import { userTypeDefs } from "./app/modules/users/schemas/usersSchemas";
import { artistTypeDefs } from "./app/modules/artists/schemas/artistsSchemas";
import { bandTypeDefs } from "./app/modules/bands/schemas/bandsSchemas";
import { trackTypeDefs } from "./app/modules/tracks/schemas/tracksSchemas";
import { genreTypeDefs } from "./app/modules/genres/schemas/genresSchemas";

const users = [{id:1, username: "Ant", age: 25}]


const server = new ApolloServer({
    dataSources: () => {
        return {
            usersAPI: new UsersAPI()
        }
    },
    typeDefs: [
        userTypeDefs,
        artistTypeDefs,
        bandTypeDefs,
        trackTypeDefs,
        genreTypeDefs

    ],
    resolvers: Resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => {

        const token = req.headers.authorization || '';

    },
});

server.listen({port: 3000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
