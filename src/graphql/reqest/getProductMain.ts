import gql from 'graphql-tag'

export const GET_PRODUCT_MAIN = gql`
    query getProduct($id: String!) {
        product(id: $id) {
            id
            name
            description
            count
            price
            categories {
                name
            }
        }
    }
`