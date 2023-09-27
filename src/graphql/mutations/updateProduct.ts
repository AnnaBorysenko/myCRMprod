import gql from "graphql-tag";

export const UPDATE_PRODUCT =
gql`
    mutation updateProduct(
        $id: String!
        $name: String!
        $description: String!
        $count: Int!
        $price: Float!
        $categories: [String!]
        $imageUrl: String!
        $isPunlish: Boolean
    ) {
        updateProduct(
            id: $id
            isPublished: $isPunlish
            name: $name
            description: $description
            price: $price
            count: $count
            categories: $categories
            imageUrl: $imageUrl
        ) {
            name
            description
            id
            count
            imageUrl
            categories {
                name
            }
        }
    }
`