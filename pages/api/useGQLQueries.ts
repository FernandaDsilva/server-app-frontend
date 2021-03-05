import { useQuery } from "react-query"
import {GraphQLClient, request} from "graphql-request"

export const useGQLQuery = (key, query, variables, config = {})  => { 
    const endpoint = 'http://localhost:3333/graphql'

    // create client graphql endpoint
    const graphqlClient = new GraphQLClient(endpoint)

    // recebe query da musica e manda para o servidor.
    const fetchData = async () => await graphqlClient.request(query, variables)

    return useQuery (key, fetchData, config)
} 