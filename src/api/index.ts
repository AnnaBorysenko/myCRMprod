import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    from,
    HttpLink,
} from "@apollo/client/core";
import {
    provideApolloClient,
    useQuery,
    useResult,
} from '@vue/apollo-composable';



const additiveLink = from([
    new ApolloLink((operation, forward) => {
        operation.setContext(({ headers }) => ({
            headers: {
                ...headers,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Credentials' : 'true',
                'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            }
        }));
        return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
    }),
    new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

export const apolloClient = new ApolloClient({
    link: additiveLink,
    cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);
