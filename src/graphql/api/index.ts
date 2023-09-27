import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    from,
    HttpLink,
} from "@apollo/client/core";


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MzA5MDc1YS04ZGRjLTRjN2ItOWVjZC1kMzQ1ZjY1NGEyNmUiLCJlbWFpbCI6ImFubmF0ZXN0QGdtYWlsLmNvbSIsIm5hbWUiOiJBbm4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTU4MTA3MjksImV4cCI6MTY5NTgxNDMyOX0.iZr0XGRNOFJY2CikFg478g_yljr1iPRwCir4pt2OVqs'

const additiveLink = from([
    new ApolloLink((operation, forward) => {
        operation.setContext(({headers}: { headers: Record<string, string> }) => ({
            headers: {
                ...headers,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                authorization: `Bearer ${token}`
            }

        }));
        return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
    }),
    new HttpLink({uri: "http://localhost:3000/graphql"}),
]);

const cache =  new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: additiveLink,
    cache,
});


