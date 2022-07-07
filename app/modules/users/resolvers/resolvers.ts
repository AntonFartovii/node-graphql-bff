
export const Resolvers = {
    Query: {
        usersAPI: async (_:any, __:any, { dataSources }: { dataSources:any} ) => {
            return dataSources.UsersAPI.getUsersAPI()
        },

        userAPI: async (_:any, { id }:{ id: string | number }, { dataSources }:{ dataSources:any} ) => {
            return dataSources.UsersAPI.getUserAPI(id)
        }
    }
}

