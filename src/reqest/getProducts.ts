import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
    query getProducts {
        products{
            id
            name
            description
            count
            price
            imageUrl
            categories
            {
                name
            }
        }
    }
`
