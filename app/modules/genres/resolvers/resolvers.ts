
export const Resolvers = {
    Query: {
        genres: async (_:any, __:any, { dataSources }: { dataSources:any} ) => {
            return dataSources.genresAPI.getGenres()

        },
        // @ts-ignore
        genre: async (_:any, { id }:{ id: string | number }, { dataSources }:{ dataSources:any} ) => {
            return dataSources.genresAPI.getGenre(id)
        }

    }
}