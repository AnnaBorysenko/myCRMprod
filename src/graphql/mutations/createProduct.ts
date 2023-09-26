import gql from "graphql-tag";

export const CREATE_PRODUCT =
gql`
    mutation createProduct(
        $name: String!
        $description: String!
        $count: Int!
        $price: Float!
        $imageUrl: String!
    ) {
        createProduct(
            name: $name
            description: $description
            price: $price
            count: $count
            imageUrl: $imageUrl
        ) {
            name
            description
            id
            price
            count
            imageUrl
        }
    }
`